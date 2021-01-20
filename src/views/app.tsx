import React from 'react'

class AppView extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for </h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default AppView;