const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/booksite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/login/:username', async(req, res) => {
    try {
        let user = await User.findOne({ username: req.params.username, password: req.body.password });
        if (!user) {
            user = new User({
                username: req.params.username,
                password: req.body.password
            });
            await user.save();
            res.send(user);
            return;
        }
        res.send(user);
    } catch (error) {
        res.sendStatus(500);
    }
});

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

app.post('/api/:username/favorite', async(req, res) => {
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

app.delete('/api/:username/favorite', async(req, res) => {
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

app.post('/api/posts', async(req, res) => {
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

app.put('/api/posts', async(req, res) => {
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

app.delete('/api/posts', async(req, res) => {
    try {
        await Post.deleteOne({ post: req.body.post });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
})

app.listen(3001, () => console.log('Server listening on port 3001!'));