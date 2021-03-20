<template>
<div class="favorites">
    <h1>Favorite Books</h1>
    <p v-if="this.$root.$data.user.username === ''">Please sign in to view your favorite books <em>(just put anything for a username and password until I build the back end)</em></p>
    <p v-if="this.$root.$data.user.favorites.length === 0 && this.$root.$data.user.username !== ''">Currently no favorites, please select from the list to add some!</p>
    <div class="masonry" v-else>
        <div class="post item masonry-item" v-for="favorite in this.$root.$data.user.favorites" :key="favorite.name"><p>{{favorite.name}}</p><img class="image" :src="favorite.image"></div>
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
export default {
    name: 'Favorites'
}
</script>