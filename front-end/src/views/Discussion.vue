<template>
<div>
    <div class="post board" v-if="this.$root.$data.currentBookId != 0">
        <h1>Discussion Board for {{this.$root.$data.currentName}}</h1>
        <div class="masonry ye">
            <div class="individual-post masonry-item" v-for="post in posts" :key="post.content">
                <p class="poster">{{post.poster}}:</p>
                <p contenteditable="true" class="post-stuff">"{{post.content}}"</p>
                <p style="margin-top: 50px">Top Response</p>
                <p class="post-stuff" style="margin-bottom: 10px">{{post.comments[Math.floor(Math.random() * Math.floor(5))]}}</p>
                <a class="link" @click="remove(post)" style="float:right">Remove</a>
                <a class="link" @click="flip(post)" style="float:left">Edit</a>
                <form v-on:submit.prevent="editPost(post)" class="editor" v-if="post.shouldEdit">
                    <textarea class="post" type="text" id="myEditedTextArea"></textarea>
                    <button class="link bonk" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div class="new">
            <h3>Create New Discussion</h3>
            <form v-on:submit.prevent="createPost">
                <label v-if="this.$root.$data.user.username === ''">Username: </label>
                <input style="background-color: #d5a47e94" v-if="this.$root.$data.user.username === ''" type="text" class="username" id="myTextUsername">
                <div class="container">
                    <textarea class="post-content" type="text" id="myTextArea"></textarea>
                </div>
                <button class="link bonk boop" type="submit">Submit</button>
        </form>
        </div>
    </div>
    <div class="post board" v-else>
        <h1>Welcome to the Discussions Board!</h1>
        <p>As you browse this week's favorite books, click on their individual discussion links to view their pages, or go to a random page by pressing <button @click="randomPage()" class="link bonk">this</button> button!</p>
    </div>
</div>
</template>

<style>
.board {
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 50px;
}
.boop {
    margin-left: 10px;
}
.new {
    margin-bottom: 50px;
}
.editor {
    margin-top: 40px;
}
</style>

<script>
import axios from 'axios';
export default {
    name: 'Discussion',
    data() {
        return {
            currentPage: 0,
            currentUsername: '',
            posts: []
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        async editPost(post) {
            if (document.getElementById("myEditedTextArea").value !== "") {
                await axios.put('/api/posts', {
                    oldPost: post,
                    newContent: document.getElementById("myEditedTextArea").value
                });
                post.content = document.getElementById("myEditedTextArea").value;
                document.getElementById("myEditedTextArea").value = "";
            }
            this.flip(post);
        },
        flip(post) {
            if (post.shouldEdit === false) {
                post.shouldEdit = true;
            } else post.shouldEdit = false
        },
        async remove(post) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i] === post) {
                    console.log(post);
                    await axios.delete('/api/posts', {
                        post: post
                    });
                    this.posts.splice(i,1);
                    return
                }
            }
        },
        randomPage() {
            this.currentPage = Math.floor(Math.random() * Math.floor(25));
            if (this.currentPage === 0) {
                this.currentPage = 1;
            }
            if (this.currentPage > 25) {
                this.currentPage = 25;
            }
            this.$root.$data.currentName = this.$root.$data.bookInfo[this.currentPage - 1].name;
            this.$root.$data.currentBookId = this.currentPage;
        },
        async getPosts() {
            if (this.$root.$data.currentName !== '') {
                this.currentPage = this.$root.$data.currentBookId;
                this.currentUsername = this.$root.$data.user.username;
            }
            await this.checkForPosts()    
        },
        async checkForPosts() {
            let posts = await axios.get("/api/posts/" + this.$root.$data.currentBookId);
            let toReturn = [];
            for (let i = 0; i < posts.data.length; i++) {
                let newPost = {
                    bookId: posts.data[i].bookID,
                    content: posts.data[i].content,
                    poster: posts.data[i].username,
                    comments: posts.data[i].comments,
                    shouldEdit: posts.data[i].shouldEdit
                }
                toReturn.push(newPost);
            }
            console.log(posts);
            this.posts = toReturn;
        },
        async createPost() {
            let postie = document.getElementById("myTextArea").value;
            if (this.$root.$data.user.username === "") {
                this.currentUsername = document.getElementById("myTextUsername").value;
            }
            if ((this.$root.$data.user.username !== '' || this.currentUsername !== '') && postie !== '') {
                if (this.currentUsername === '') {
                    this.currentUsername = this.$root.$data.user.username;
                }
                let post = {
                    bookId: this.currentPage,
                    content: postie,
                    poster: this.currentUsername,
                    comments: ["Johnny: Wow, I sure with that vue would let me put a loop inside of a loop to add comments!", "Pheobe: Same Johnny, I spent hours trying to find a way around it but I never could", "Mark: This sure is neat how the posts are saved on the individual books and across page refreshes!", "John: I completely agree Mark, and dont forget the fact that you can sign in and have your favorites rememebered!", "Password: Hopefully nobody noticed that you can have the same username as someone else if you just use a different password..."],
                    shouldEdit: false
                };
                await axios.post("/api/posts", {
                    post: post
                });
                this.$root.$data.postData.push(post);
                document.getElementById("myTextArea").value = "";
                if (this.$root.$data.user.username === '') {
                    document.getElementById("myTextUsername").value = "";
                }
                this.posts.push(post);
                return;
            }
            alert("Please fill out all fields");
        },
    }
}

</script>