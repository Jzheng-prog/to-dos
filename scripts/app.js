

const TodosApp = {
    data() {
        return {
            todos: [], // <li v-for="todo in todos">
            enteredTodoText: '', //two way binding <input v-model = 'enteredTodoText'
            editedTodoId: null
        };
    },

    methods:{ //using @submit = ''saveTodo' on form
        saveTodo(event){
            event.preventDefault();

            if(this.editedTodoId){ //updating
                const todoid = this.editedTodoId;

                const toDoIndex = this.todos.findIndex(function(item){
                    return item.id === todoid;
                })

                const updatedToDoItem = {
                    id: this.todos[toDoIndex].id,
                    text: this.enteredTodoText
                };

                this.todos[toDoIndex] = updatedToDoItem;

                this.editedTodoId = null;

            }else {
                const newTodo ={
                    text: this.enteredTodoText, // <li v-for="todo in todos"> //todo.text
                    id : new Date().toISOString()
                }
                this.todos.push(newTodo);
            }
            this.enteredTodoText = '';
        },
        startEditTodo(todoId){
            this.editedTodoId = todoId;
            const todo = this.todos.find(function(todoItem){
                return todoItem.id === todoId;
            })
            this.enteredTodoText =todo.text
        },
        deleteTodo(todoId){
            this.todos = this.todos.filter(function(item){
                return item.id !== todoId;
            })
        }
    }
}

Vue.createApp(TodosApp).mount('#todos-app'); //#todos-app <main id = ''>