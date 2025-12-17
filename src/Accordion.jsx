// src/Accordion.jsx
import { useState } from 'react';

// Thành phần con: Panel
function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel" style={{ border: '1px solid #ddd', marginBottom: '5px', padding: '10px' }}>
            <h4>{title}</h4>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>Show</button>
            )}
        </section>
    );
}

// Thành phần cha: Accordion
export default function Accordion() {
    // Quản lý trạng thái panel nào đang mở tại component cha
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Alumni Spotlight (Accordion)</h2>
            <Panel
                title="About (Panel 1)"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Kazakhstan's largest city.
            </Panel>

            <Panel
                title="Etymology (Panel 2)"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from the Kazakh word for "apple".
            </Panel>
        </div>
    );
}