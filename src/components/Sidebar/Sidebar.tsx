import { CalendarIcon, EditIcon, AtSignIcon, InfoIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


export const Sidebar = () => {

    return (
        <List color="white" size="1.2em" spacing={4}>
            <ListItem><NavLink to="/"><ListIcon as={CalendarIcon} color="white" />Home</NavLink></ListItem>
            <ListItem><NavLink to="/marketplace"><ListIcon as={EditIcon} color="white" />Marketplace</NavLink></ListItem>
            <ListItem><NavLink to="/lottery"><ListIcon as={AtSignIcon} color="white" />Lottery Tickets</NavLink></ListItem>
            <ListItem><NavLink to="/roadmap"><ListIcon as={AtSignIcon} color="white" />RoadMap</NavLink></ListItem>
            <ListItem><NavLink to="/whitepaper"><ListIcon as={InfoIcon} color="white" />Whitepaper</NavLink></ListItem>
        </List>
    )
}

