const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const argon2 = require("argon2");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://localhost:27017/booksite', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secret'],
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();

    }
    try {
        const hash = await argon2.hash(this.password);
        this.password = hash;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password) {
    try {
        const match = await argon2.verify(this.password, password);
        return match;
    } catch (error) {
        return false;
    }
}

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

const User = mongoose.model('User', userSchema);

const validUser = async(req, res, next) => {
    if (!req.session.userID)
        return res.status(403).send({
            message: "no signed in user"
        });
    try {
        const user = await User.findOne({
            _id: req.session.userID
        });
        if (!user) {
            return res.status(403).send({
                message: "no signed in user"
            });
        }
        req.user = user;
    } catch (error) {
        return res.status(403).send({
            message: "no signed in user"
        });
    }
    next();
}

app.post('/api/register', async(req, res) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.firstName || !req.body.lastName) {
            return res.status(400).send({
                message: "Please fill in all fields"
            });
        }
        const user = await User.findOne({
            username: req.body.username
        });
        if (user) {
            return res.status(403).send({
                message: "Username is already in use, please try again"
            });
        }
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        await newUser.save();
        req.session.userID = newUser._id;
        return res.send(newUser);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/login', async(req, res) => {
    try {
        if (!req.body.username) {
            return res.status(400).send({
                message: "Please provide a username"
            });
        }
        if (!req.body.password) {
            return res.status(400).send({
                message: "Please provide a password"
            });
        }
        let user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send({
                message: "Invalid Username / Password combo"
            });
        } else {
            if (!await user.comparePassword(req.body.password))
                return res.status(403).send({
                    message: "Invalid Username / Password combo"
                });
            req.session.userID = user._id;
            res.send(user);
        }
    } catch (error) {
        res.sendStatus(500);
    }
});

app.get('/api/get', validUser, async(req, res) => {
    try {
        res.send(req.user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.delete('/api/get', validUser, async(req, res) => {
    try {
        req.session = null;
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
})

const favoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    favorite: {
        id: String,
        name: String,
        image: String,
        price: String,
        link: String,
        description: String,
        views: String
    }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);


app.get('/api/:userID', async(req, res) => {
    try {
        let favorites = await Favorite.find({ user: req.params.userID });
        if (!favorites) {
            res.sendStatus(404);
            return;
        }
        res.send(favorites);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.post('/api/:username/favorite', validUser, async(req, res) => {
    try {
        let user = await User.findOne({ username: req.params.username });
        if (!user) {
            res.sendStatus(404);
            return;
        }
        let favorite = new Favorite({
            user: user,
            favorite: req.body.favorite
        });
        await favorite.save();
        res.send(favorite);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.delete('/api/:username/favorite', validUser, async(req, res) => {
    try {
        let user = await User.findOne({ username: req.params.username });
        if (!user) {
            res.sendStatus(404);
            return;
        }
        await Favorite.deleteOne({ user: user, id: req.body.favorite_id });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
});

const postSchema = new mongoose.Schema({
    username: String,
    content: String,
    bookID: String,
    shouldEdit: Boolean,
    comments: Array
});

const Post = mongoose.model('Post', postSchema);

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post'
    },
    comment: String
});

const Comment = mongoose.model('Comment', commentSchema);

app.get('/api/posts/:bookID', async(req, res) => {
    try {
        let posts = await Post.find({ bookID: req.params.bookID });
        if (!posts) {
            res.sendStatus(404);
            return;
        }
        if (posts.data != undefined) {
            for (let i = 0; i < posts.data.length; i++) {
                let comments = await Comment.find({ post: posts.data[i] });
                if (comments) {
                    posts.data[i].comments = comments;
                }
            }
        }
        res.send(posts);

    } catch (error) {
        res.sendStatus(500);
    }
});

app.post('/api/posts', validUser, async(req, res) => {
    try {
        let postee = req.body.post;
        let post = new Post({
            username: postee.poster,
            content: postee.content,
            bookID: postee.bookId,
            shouldEdit: postee.shouldEdit,
            comments: postee.comments
        });
        await post.save();
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.put('/api/posts', validUser, async(req, res) => {
    try {
        let post = await Post.findOne({ username: req.body.oldPost.poster, content: req.body.oldPost.content });
        if (!post) {
            res.sendStatus(404);
            return;
        }
        post.content = req.body.newContent;
        await post.save();
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.delete('/api/posts', validUser, async(req, res) => {
    try {
        await Post.deleteOne({ post: req.body.post });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
})

app.listen(3001, () => console.log('Server listening on port 3001!'));