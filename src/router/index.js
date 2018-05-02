import Profile from '../public/modules/profile/profile.vue'
import Todo from '../public/modules/todo/todo.vue'
import Welcome from '../public/modules/welcome/welcome.vue'
import todoDetail from '../public/modules/todo/todo-detail.vue'

export const routes = [
  {path: '/', component: Welcome},
  {
    path: '/profile', component: Profile, name: 'profile'
  },
  {path: '/todo', component: Todo, name: 'todo'},
  {path: '/todo/:id', component: todoDetail, name: 'todo-detail'}
];

