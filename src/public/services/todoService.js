import axios from 'axios'

export default {

      getTodo: function getTodo() {
        return axios.get('https://vuejs-http-7f2d8.firebaseio.com/data.json')
      },
      postTodo: function postTodo(newTask) {
        return axios.post('https://vuejs-http-7f2d8.firebaseio.com/data.json', newTask)

      },
      updateTodo: function updateTodo(updateKey, newTask) {
        return axios.put('https://vuejs-http-7f2d8.firebaseio.com/data/' + updateKey + '.json', newTask)
      },
      deleteTodo: function deleteTodo(deleteKey) {
        return axios.delete('https://vuejs-http-7f2d8.firebaseio.com/data/' + deleteKey + '.json')
      }
}
