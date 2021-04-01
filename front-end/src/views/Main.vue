<template>
<div>
  <div v-if="this.$root.$data.currentBookId > 0">
    <h1>This Month's Most Viewed Books</h1>
    <h2>{{this.$root.$data.currentBookId}} / 25</h2>
    <div class="buttons">
    <button class="honk" @click="previousBook()">Previous</button>
    <button @click="nextBook()">Next</button>
    </div>
  </div>
    <div class="post book-frame" v-if="this.$root.$data.currentBookId > 0">
      <h1>{{this.$root.$data.currentName}}</h1>
      <p>Total views this month: {{this.$root.$data.currentViews}}</p>
      <a :href="this.$root.$data.currentLink">
        <img class="image-large" :src="this.$root.$data.currentImage">
      </a>
      <p>Price: {{this.$root.$data.currentPrice}}</p>
      <p class="description"><strong>{{this.$root.$data.currentDescription}}</strong></p>
      <router-link to="/discussion" class="link bonk">Discussion</router-link>
      <button class="link bonk" @click="addToFav()" v-if="this.$root.$data.user.username !== ''">Favorite</button>
    </div>
    <div class="post welcome" v-else>
      <h1>Welcome to the Book Nook Book Browser!</h1>
      <p>Click next to view this Month's most popular books!</p>
    </div>
    <div class="buttons">
      <button class="honk" @click="previousBook()">Previous</button>
      <button @click="nextBook()">Next</button>
    </div>
    <Favorites />
</div>
</template>

<style>

.bonk {
  border-radius: 10px;
  padding: 5px;
  background-color:#835d40;
  margin-right: 5px;
}

.honk {
  margin-right: 5px;
}

.buttons {
  margin-bottom: 30px;
}

.book-frame {
  width: 50%;
  margin: auto !important;
  padding: 20px 0;
  margin-bottom: 100px !important;
}

.image-large {
  height: 450px;
}

.welcome {
  padding: 30px;
  margin-bottom: 100px !important;
}

@media only screen and (min-width: 1024px) {
  .description {
    padding: 0 90px;
  }
}
    
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .description {
    padding: 0 90px;
  }

  .book-frame {
    width: 85%;
    margin: auto !important;
    padding: 20px 0;
    margin-bottom: 50px !important;
  }
}
    
@media only screen and (max-width: 539px) {
  .description {
    padding: 0 30px;
  } 

  .book-frame {
  width: 85%;
  margin: auto !important;
  padding: 20px 0;
  margin-bottom: 50px !important;
  }
}
</style>

<script>
import Favorites from '../components/Favorites'
export default {
  name: 'Main',
  components: {
    Favorites
  },
  methods: {
    addToFav() {
      for (let i = 0; i < this.$root.$data.user.favorites.length; i++) {
          if (this.$root.$data.bookInfo[this.$root.$data.currentBookId - 1] === this.$root.$data.user.favorites[i]){
            return;
          }
      }
      this.$root.$data.user.favorites.push(this.$root.$data.bookInfo[this.$root.$data.currentBookId - 1])
    },
    previousBook() {
      if (this.$root.$data.currentBookId === 0 || this.$root.$data.currentBookId === 1) {
        this.$root.$data.currentBookId = 25;
      } else {
      this.$root.$data.currentBookId -= 1;
      }
      let book = this.$root.$data.bookInfo[this.$root.$data.currentBookId - 1];
      this.$root.$data.currentDescription = book.description;
      this.$root.$data.currentViews = book.views;
      this.$root.$data.currentImage = book.image;
      this.$root.$data.currentLink = book.link;
      this.$root.$data.currentName = book.name;
      this.$root.$data.currentPrice = book.price;
      return;
    },
    nextBook() {
      if (this.$root.$data.currentBookId === 25) {
        this.$root.$data.currentBookId = 1;
      } else {
        this.$root.$data.currentBookId += 1;
      }
      let book = this.$root.$data.bookInfo[this.$root.$data.currentBookId - 1];
      this.$root.$data.currentDescription = book.description;
      this.$root.$data.currentViews = book.views;
      this.$root.$data.currentImage = book.image;
      this.$root.$data.currentLink = book.link;
      this.$root.$data.currentName = book.name;
      this.$root.$data.currentPrice = book.price;
      return;
    },
  },
  computed: {
    books() {
      return this.$root.$data.bookInfo
    }
  },
}
</script>

