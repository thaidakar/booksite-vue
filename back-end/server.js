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
    username: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/login/:username', async(req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.username });
        if (!user) {
            user = new User({
                username: req.params.username
            });
            await user.save();
            res.send(user);
            return;
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));