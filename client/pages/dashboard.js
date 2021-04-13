import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'

function dashboard() {

    // state = { activeItem: 'home' }

    
    // const { activeItem } = this.state
    
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div className="dashboard">
            <nav className="menu-nav">
                <Menu pointing secondary vertical>
                    <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                    />
                </Menu>
            </nav>
        </div>
    )
}

export default dashboard
