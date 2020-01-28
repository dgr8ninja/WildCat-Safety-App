import React, { useState } from 'react'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { remove } from '../../Redux/jwt-verification/actions'

const TopMenu = ({ handleSideMenuClick, remove, jwt }) => {
    const { accessLevel } = jwt
    let navItems = []
    if (accessLevel === 3) {
        navItems = [
            { name: 'Home', link: '/admin/dashboard' },
            { name: 'Report', link: '/admin/report' },
            { name: 'Safety', link: '/admin/safety' },
        ]
    }
    if (accessLevel === 2) {
        navItems = [
            { name: 'Home', link: '/admin/dashboard'},
            { name: 'WildCat U', link: '/admin/wildcatU' },
        ]
    }

    const [activeItem, setActiveItem] = useState('support')
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        if (name === 'home') return <Redirect to="/dashboard" />
        return <Redirect to={`/${name}`} />
    }

    return (
        <div>
            <Menu color="blue" inverted pointing secondary>
                <Menu.Item onClick={handleSideMenuClick}>
                    <Icon name="content" size="large" />
                </Menu.Item>

                {navItems.map(item => {
                    return (
                        <Link to={item.link}>
                            <Menu.Item
                                name={item.name}
                                active={activeItem === `${item.name}`}
                                onClick={handleItemClick}
                            />
                        </Link>
                    )
                })}
                <Menu.Menu position="right">
                    <Menu.Item
                        name="logout"
                        active={activeItem === 'logout'}
                        onClick={() => remove()}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}
const mapStateToProps = state => {
    return { jwt: state.jwt }
}

export default connect(mapStateToProps, { remove })(TopMenu)