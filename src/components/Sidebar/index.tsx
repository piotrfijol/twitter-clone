import { Box, List, ListItem, ListItemIcon, 
        ListItemText, ListItemButton, ListItemAvatar,
        Avatar, Typography, Button } from '@mui/material'
import { House, Tag, Notifications, Mail, 
        Article, Bookmark, Person2, 
        MoreHoriz, Twitter} from '@mui/icons-material'
import { MouseEvent, useState } from 'react'
import { MoreMenu } from './MoreMenu'
import { StyledNavLink } from './StyledNavLink'

export const Sidebar = () => {
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<HTMLElement | null>(null);
  const isMoreMenuOpen = Boolean(moreMenuAnchor);

  const toggleMoreMenu = (ev: MouseEvent<HTMLElement>) => {
    setMoreMenuAnchor(ev.currentTarget)
  }

  const handleClose = () => {
    setMoreMenuAnchor(null);
  }

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
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          />
          <ListItem onClick={toggleMoreMenu}>
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
          <ListItem sx={{
            display: 'flex',
            marginTop: 'auto'
          }}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src="" />
              </ListItemAvatar>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex'
                  },
                  alignItems: 'center'
                }}              
              >
                <ListItemText>
                  <Typography
                    sx={{
                      fontWeight: 800
                    }}
                  >Full Name</Typography>
                  <Typography
                    sx={{
                      fontWeight: 300
                  }}>@nickname123</Typography>
                </ListItemText>
                <ListItemIcon><MoreHoriz /></ListItemIcon>
              </Box>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}