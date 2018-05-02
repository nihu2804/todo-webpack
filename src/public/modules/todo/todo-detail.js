import axios from 'axios';

export default {
  data: function () {
    return {
      key: this.$route.params.id,
      task:{}
    }
  },
  watch:{
    '$route'(to, from)
    {
      this.taskId = to.params.id;
    }
  },
  methods: {
    fetchTaskDetail: function () {

      axios.get('https://vuejs-http-7f2d8.firebaseio.com/data/'+ this.key +'.json')
        .then(response => {
          this.task =  response.data;
          console.log(response.data);
        })
    }
  },
  beforeMount(){
    this.fetchTaskDetail()

  },
  template:'#todoDetail'
}
