import { Box, List, ListItem, ListItemIcon, 
        ListItemText, ListItemButton, Button } from '@mui/material'
import { House, Tag, Notifications, Mail, 
        Article, Bookmark, Person2, 
        MoreHoriz, Twitter} from '@mui/icons-material'
import { MouseEvent, useState } from 'react'
import { MoreMenu } from './MoreMenu'
import { StyledNavLink } from './StyledNavLink'
import { ProfileMenu } from './ProfileMenu'
import { UserProfile } from '../UserProfile'

export const Sidebar = () => {
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<HTMLElement | null>(null);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<HTMLElement | null>(null);
  const isMoreMenuOpen = Boolean(moreMenuAnchor);
  const isProfileMenuOpen = Boolean(profileMenuAnchor);

  const openMoreMenu = (ev: MouseEvent<HTMLElement>) => {
    setMoreMenuAnchor(ev.currentTarget)
  };

  const closeMoreMenu = () => {
    setMoreMenuAnchor(null);
  };

  const openProfileMenu = (ev: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(ev.currentTarget);
  };

  const closeProfileMenu = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'block'
        },
        maxWidth: {
          xs: 100,
          md: 300
        },
        overflow: 'auto',
        '.MuiButtonBase-root': {
          p: 1,
          m: .4,
          justifyContent: 'center',
          '.MuiListItemIcon-root': {
            justifyContent: 'center'
          }, 
          '.MuiAvatar-root': {
            m: 'auto'
          }
        },
        '.MuiListItem-root:last-child': {
          marginTop: 'auto'
        },
        '.MuiListItemText-root': {
          m: 0
        },
        '.MuiListItem-root .MuiListItemText-root': {
          display: {
            sm: 'none',
            md: 'block' 
          },
        },
      }}
    >
      <List
        sx={{
          height: '100vh'
        }}
      >
        <ListItem>
          <StyledNavLink to="">
            <ListItemIcon
              sx={{
                paddingBottom: 1.5
              }}
            >
              <Twitter />
            </ListItemIcon>
          </StyledNavLink>
        </ListItem>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><House /> </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Tag /> </ListItemIcon>
              <ListItemText>Explore</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Notifications /> </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Mail /> </ListItemIcon>
              <ListItemText>Messages</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Article /> </ListItemIcon>
              <ListItemText>Lists</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Bookmark /> </ListItemIcon>
              <ListItemText>Bookmarks</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
        <StyledNavLink to="">
          <ListItem>
            <ListItemButton>
              <ListItemIcon><Person2 /> </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
          <MoreMenu 
            open={isMoreMenuOpen} 
            anchorEl={moreMenuAnchor} 
            onClose={closeMoreMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          />
          <ListItem onClick={openMoreMenu}>
            <ListItemButton >
              <ListItemIcon><MoreHoriz /> </ListItemIcon>
              <ListItemText>More</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              p: 1
            }}
          >
            <Button variant="contained" color='info' sx= {{
              color: 'text.primary',
              flex: 1,
              borderRadius: 7
            }}>
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText>
                Tweet
              </ListItemText>
            </Button>
          </ListItem>
          
          <ProfileMenu 
            open={isProfileMenuOpen} 
            anchorEl={profileMenuAnchor} 
            onClose={closeProfileMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          />
          <ListItem 
            onClick={openProfileMenu}
          >
            <ListItemButton>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex'
                  },
                  alignItems: 'center'
                }}              
              >
                <UserProfile />
                <ListItemIcon><MoreHoriz /></ListItemIcon>
              </Box>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}