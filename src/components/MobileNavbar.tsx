import React from 'react'
import { Box, Stack, SvgIconTypeMap } from '@mui/material'
import { styled } from '@mui/system'
import HouseIcon from '@mui/icons-material/House'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { Link, To } from 'react-router-dom'

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

interface NavItemProps {
    icon: Icon,
    to: To
}

const NavLink = styled(Link)({
    display: 'block',
    color: '#FFF',
    height: '100%',
    padding: '.5rem',
    '&:hover': {
        cursor: 'pointer',
        color: '#BBB',
    }
});

const NavItem = ({icon: Icon, to}: NavItemProps) => {
    return (
        <Box component="li" flex="1">
            <NavLink to={to}>
                <Icon />
            </NavLink>
        </Box>
    );
};

export const MobileNavbar: React.FC = () => {
  return (
    <Box>
        <Stack 
            component="ul"
            direction="row" 
            justifyContent="space-evenly"
            sx={{
                m: 0,
                p: 0,
                listStyleType: 'none',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0
            }}
        >
            <NavItem icon={HouseIcon} to=""/>
            <NavItem icon={SearchIcon} to=""/>
            <NavItem icon={NotificationsIcon} to=""/>
            <NavItem icon={MailIcon} to=""/>
        </Stack>
    </Box>
)
}
