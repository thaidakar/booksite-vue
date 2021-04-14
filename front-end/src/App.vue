<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <div v-if="this.$root.$data.user.username !== ''" class="login">
          <p>Howdy {{this.$root.$data.user.username}}!
          <button @click="signOut()">Sign Out</button></p>
      </div>
      <div v-else class="login">
        <form v-on:submit.prevent="">
          <label for="Username">Username :</label>
          <input id="uz" type="text" v-model="username" required>
          <br>
          <label for="Password">Password :</label>
          <input id="pd" type="text" v-model="password" required>
          <br>
          <label for="firstName">First Name:</label>
          <input type="text" v-model="firstName" required>
          <br>
          <label for="lastName">Last Name:</label>
          <input type="text" v-model="lastName" required>
        </form>
        <p><button @click="signIn()">Sign In</button> or <button @click="register()">Register</button></p>
      </div>
    </div> 
    <router-view/>
    <div class="footer">
      <a class="link" href="http://spatutastic.com">spatutastic.com</a> |
      <a class="link" href="https://github.com/thaidakar/booksite-vue/tree/master">Github</a>
    </div>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #79672c;
}

.login {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px 105px;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  },
  async created() {
    try {
      let user = await axios.get('/api/get');
      this.$root.$data.user.username = user.data.username;
      this.$root.$data.user.firstName = user.data.firstName;
      this.$root.$data.user.lastName = user.data.lastName;
      let favs = await axios.get("/api/" + user.data._id);
      let favorites = [];
      for (let i = 0; i < favs.data.length; i++) {
        favorites.push(favs.data[i].favorite)
      }
      this.$root.$data.user.favorites = favorites; 
    } catch(error) {
      console.log(error);
    }
  },
  methods: {
    async register() {
      if (this.username !== '' && this.password !== '' && this.firstName !== '' && this.lastName !== '') {
        try {
          let user = await axios.post('/api/register', {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
          });
          this.$root.$data.user.username = user.data.username;
          this.$root.$data.user.firstName = user.data.firstName;
          this.$root.$data.user.lastName = user.data.lastName;
        } catch (error) {
          alert(error.response.data.message);
          this.$root.$data.user.username = '';
          this.$root.$data.user.firstName = '';
          this.$root.$data.user.lastName = '';
        }
      }
      this.username = '';
      this.password = '';
      this.firstName = '';
      this.lastName = '';
    },
    async signIn() {
      if (this.username !== '' && this.password !== '') {
        try {
          let user = await axios.post('/api/login', {
            username: this.username,
            password: this.password
          });
          this.$root.$data.user.username = user.data.username;
          this.$root.$data.user.firstName = user.data.firstName;
          this.$root.$data.user.lastName = user.data.lastName;
          let favs = await axios.get("/api/" + user.data._id);
          let favorites = [];
          for (let i = 0; i < favs.data.length; i++) {
            favorites.push(favs.data[i].favorite)
          }
          this.$root.$data.user.favorites = favorites;  
        } catch (error) {
          alert(error.response.data.message);
          this.$root.$data.user.username = '';
          this.$root.$data.user.favorites = [];
          this.$root.$data.user.firstName = '';
          this.$root.$data.user.lastName = '';
        }
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
      } 
    },
    async signOut() {
      this.$root.$data.user.username = '';
      this.$root.$data.user.favorites = [];
      try {
        await axios.delete('/api/get');
      } catch (error) {
        console.log(error);
      }
    }
  },
}

</script>