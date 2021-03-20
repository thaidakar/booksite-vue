import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bookdata from '../src/book-data.js'
import './css/styles.css'


Vue.config.productionTip = false

let data = {
    bookInfo: bookdata,
    currentBookId: 0,
    currentImage: '',
    currentLink: '',
    currentDescription: '',
    currentPrice: '',
    currentName: '',
    currentViews: '',
    user: {
        favorites: [],
        username: ''
    },
    postData: []
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')