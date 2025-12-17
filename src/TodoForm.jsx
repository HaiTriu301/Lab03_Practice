import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text); // Gọi hàm từ component cha truyền xuống
        setText(''); // Xóa ô input sau khi thêm
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default TodoForm;