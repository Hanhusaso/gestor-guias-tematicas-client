import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'

function dashboard() {

    // state = { activeItem: 'home' }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // const { activeItem } = this.state

    const [activeItem, setActiveItem] = useState('home');

    return (
        <div className="dashboard">
            <Menu pointing secondary vertical>
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                // onClick={this.handleItemClick}
                />
            </Menu>
        </div>
    )
}

export default dashboard
