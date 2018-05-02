import todoService from "../../services/todoService";

var that;
export default {
  data: function () {
    return {
      newTask: "",
      tasks: [],
      count: 0,
      editingTask: {}
    }
  },
    component : {
    name: 'todo'
    },
  // computed: {
  //   areAllSelected: function () {
  //     return this.tasks.every(function (task) {
  //       return task.checked;
  //     }) && this.tasks.length > 0;
  //   },
  // },
  created: function(){
    console.log('cre');
      console.log(this);
       that = this;
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      console.log('fetchdate');
      todoService.getTodo()
        .then(response => {
          console.log(response.data);
          this.tasks = response.data;
          const resultArray = [];
          for (let key in response.data) {
            let obj = response.data[key];
            obj.key = key;
            resultArray.push(obj);
          }
          this.tasks = resultArray;
          this.count = resultArray.length;
        })
    },

    // fetchData: function () {
    //   todoService.getTodo()
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       const resultArray = [];
    //       for (let key in data) {
    //         var obj = data[key];
    //         obj.key = key;
    //         resultArray.push(obj);
    //       }
    //       this.tasks = resultArray;
    //       this.count = resultArray.length;
    //     });
    // },

    addTask: function () {
      var task = this.newTask.trim();
      if (task) {
        this.count++;
        var newTask = {text: task, checked: false, id: this.count};
        this.newTask = "";
      }
      todoService.postTodo(newTask)
        .then(function (response) {
          console.log(response);
          console.log(this);
          that.fetchData();
          console.log('post');
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    removeTask: function (task) {
      var deleteKey;
      for (let t in this.tasks) {
        var item = this.tasks[t];
        if (item.id === task.id)
          deleteKey = item.key;
      }

      todoService.deleteTodo(deleteKey)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    editTask: function (task) {
      this.editingTask = task;
      console.log(task.text);
    },

    endEditing: function (task) {
      this.editingTask = {};
      if (task.text.trim() === "") {
        this.removeTask(task);
      }
      else {
        var newTask = {text: task.text, checked: false, id: task.id};

        var updateKey;
        for (let t in this.tasks) {
          var item = this.tasks[t];
          if (item.id === task.id)
            updateKey = item.key;
        }

        todoService.updateTodo(updateKey, newTask)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },

    clearList: function () {
      this.tasks = [];
    },

    selectAll: function (task) {
      var targetValue = this.areAllSelected ? false : true;
      for (var i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue;
      }
    },

    check: function (task) {
      task.checked = true;
    },

    isChecked: function (task) {
      return task.checked;
    }
  },
  // beforeMount() {
  //   this.fetchData()
  //
  // },
  template: '#my-todo'
}
