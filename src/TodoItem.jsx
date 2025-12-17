function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
                Delete
            </button>
        </li>
    );
}
export default TodoItem;