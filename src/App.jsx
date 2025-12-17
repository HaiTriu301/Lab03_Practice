// src/App.jsx
import UserProfile from './UserProfile';
import Counter from "./Counter.jsx";
import Login from "./Login.jsx";
import Card from "./Card.jsx"; // Import Card mới tạo
import Accordion from "./Accordion.jsx"; // Import Accordion mới tạo

function App() {
    const user1 = {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };

    const user2 = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };

    return (
        <div>
            <h1>React Basics Exercise</h1>

            {/* Exercise 7.1: Sử dụng Card để bọc UserProfile */}
            <Card title="Premium User Profile">
                <UserProfile userData={user1} theme="light" />
            </Card>

            <Card title="Standard User Profile">
                <UserProfile userData={user2} theme="dark" />
            </Card>

            <hr/>
            <Counter />

            <hr/>
            <Login />

            <hr/>
            {/* Exercise 7.2: Thêm Accordion để minh họa Lifting State Up */}
            <Accordion />
        </div>
    );
}

export default App;