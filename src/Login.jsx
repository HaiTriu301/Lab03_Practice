// src/Login.jsx (Phiên bản nâng cấp)
import { useState } from 'react';

function Login() {
    // Quản lý nhiều input trong 1 object [cite: 100]
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Hàm xử lý chung cho tất cả input [cite: 101]
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value // Cập nhật động dựa trên thuộc tính 'name' của thẻ input [cite: 102]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn load lại trang [cite: 103]
        console.log('Form Submitted:', formData); // Log dữ liệu ra console [cite: 103]
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            <h3>Login Form</h3>
            <div>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;