const Todo = (props) => {
    //properties
    //parent => child; top => bottom


    const todos = props.todos;
    return (
        <div className="todos-container">
            {todos.map((todo) => {
                return (
                    <li className="todo-child" key={todo.id}>
                        {todo.title}
                    </li>
                );
            })}
        </div>
    )
}

export default Todo;