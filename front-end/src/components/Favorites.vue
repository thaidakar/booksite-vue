<template>
<div class="favorites">
    <h1>Favorite Books</h1>
    <p v-if="this.$root.$data.user.username === ''">Please sign in to view and add to your favorite books</p>
    <p v-if="this.$root.$data.user.favorites.length === 0 && this.$root.$data.user.username !== ''">Currently no favorites, please select from the list to add some!</p>
    <div class="masonry" v-else>
        <div class="post item masonry-item" v-for="favorite in this.$root.$data.user.favorites" :key="favorite.name">
            <p>{{favorite.name}}</p>
            <img class="image" :src="favorite.image">
            <p></p>
            <button class="link bonk" @click="remove(favorite)">Remove</button>
        </div>
    </div>
</div>
</template>

<style>
.favorites {
    margin: 10px 0 100px 0px;
}
.image {
    height: 100px;
    padding: 10px;
}
</style>

<script>
import axios from 'axios';
export default {
    name: 'Favorites',
    methods: {
        async remove(favorite) {
            console.log(favorite);
            try {
                await axios.delete("/api/" + this.$root.$data.user.username + "/favorite", {
                    favorite_id: favorite.id
                });
                for (let i = 0; i < this.$root.$data.user.favorites.length; i++) {
                    if (this.$root.$data.user.favorites[i].id === favorite.id) {
                        this.$root.$data.user.favorites.splice(i, 1);
                        return;
                    }
                }
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>
