<template>
<div>
    <div class="post board" v-if="this.$root.$data.currentBookId != 0">
        <h1>Discussion Board for {{this.$root.$data.currentName}}</h1>
        <div class="masonry ye">
            <div class="individual-post masonry-item" v-for="post in getPosts()" :key="post.content">
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
export default {
    name: 'Discussion',
    data() {
        return {
            currentPage: 0,
            currentUsername: '',
        }
    },
    methods: {
        editPost(post) {
            if (document.getElementById("myEditedTextArea").value !== "") {
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
        remove(post) {
            for (let i = 0; i < this.$root.$data.postData.length; i++) {
                if (this.$root.$data.postData[i] === post) {
                    this.$root.$data.postData.splice(i,1);
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
        getPosts() {
            if (this.$root.$data.currentName !== '') {
                this.currentPage = this.$root.$data.currentBookId;
                this.currentUsername = this.$root.$data.user.username;
            }
            return this.checkForPosts()    
        },
        checkForPosts() {
            if (this.$root.$data.postData.length > 0) {
                let toFill = new Array;
                for (let i = 0; i < this.$root.$data.postData.length; i++) {
                    if (this.$root.$data.postData[i].bookId === this.currentPage) {
                        toFill.push(this.$root.$data.postData[i]);
                    }
                }
                return toFill;
            }
            return null;
        },
        createPost() {
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
                    comments: ["Jerry: 'wow that's such a good comment!'", "Bernie: 'You're so smart!'", "Johnny: 'I love the way you write'", "Bertha: 'YES!'", "HOOOLIGAN6969: 'hehe'"],
                    shouldEdit: false
                };
                this.$root.$data.postData.push(post);
                document.getElementById("myTextArea").value = "";
                if (this.$root.$data.user.username === '') {
                    document.getElementById("myTextUsername").value = "";
                }
                return;
            }
            alert("Please fill out all fields");
        },
    }
}

</script>