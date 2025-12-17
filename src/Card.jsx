// src/Card.jsx
function Card({ title, children }) {
    return (
        <div className="card" style={{ border: '2px solid black', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            <h3>{title}</h3>
            <hr />
            <div className="card-content">
                {children} {/* Nơi nội dung con sẽ hiển thị */}
            </div>
        </div>
    );
}

export default Card;