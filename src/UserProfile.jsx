// src/UserProfile.jsx
import PropTypes from 'prop-types'; // Sẽ dùng ở bước sau

// Nhận props và đặt giá trị mặc định cho theme là 'light'
function UserProfile({ userData, theme = 'light' }) {
    return (
        <div className={`profile-card theme-${theme}`}>
            <h2>User Profile</h2>
            <img
                className="profile-avatar"
                src={userData.avatarUrl}
                alt={userData.name}
                width={userData.imageSize}
                height={userData.imageSize}
            />
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

// Thêm vào cuối file UserProfile.jsx
UserProfile.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired, // Bắt buộc phải là chuỗi
        email: PropTypes.string,           // Phải là chuỗi
        avatarUrl: PropTypes.string,
        imageSize: PropTypes.number
    }).isRequired,
    theme: PropTypes.string
};

export default UserProfile;