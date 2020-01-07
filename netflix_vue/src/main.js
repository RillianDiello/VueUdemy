import Vue from 'vue'
// import App from './App.vue'
import Home from './Pages/Home.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const Contato = { template: '<p>Paginda de contato em construção.</p>'}
const Undefine = { template: '<p>Página não encontrada.</p>'}


const routes = [
  {path: '/', component: Home},
  {path: '/contato', component: Contato},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router  
}).$mount('#app')

// new Vue({
//   el: '#app',
//   data: {
//     current_rote: window.location.pathname
//   },

//   computed: {
//     exibeComponent(){
//       return rotes[this.current_rote] || Undefine
//     }
//   },

//   render(h) { return h(this.exibeComponent)}
// })
