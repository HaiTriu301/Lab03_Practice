// src/Counter.jsx
import { useState } from 'react';

function Counter() {
    // Khởi tạo state 'count' với giá trị mặc định là 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            <h3>Simple Counter</h3>
            {/* Hiển thị giá trị hiện tại của count */}
            <p>Current Count: {count}</p>

            {/* Nút bấm để tăng giá trị thêm 1 */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;