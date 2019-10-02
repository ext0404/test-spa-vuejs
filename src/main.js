import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import Home from './components/Home.vue'


Vue.config.productionTip = false

// Vue.use(VueRouter)



// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       component: Home
//     }
//   ]
// })


// new Vue({
//   router
// }).$mount('#app')


new Vue({
  
  render: h => h(App),
}).$mount('#app')
