import { Avatar, Box, Button, Divider, Drawer, DrawerProps, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useState } from 'react'
import { Close, Article, Bookmark, Person2, Settings, Logout } from '@mui/icons-material'
import { UserProfile } from './UserProfile';
import { FollowStats } from './FollowStats';

interface MenuDrawerProps {
    anchor?: DrawerProps["anchor"],
}

export const MenuDrawer = ({anchor = "left"}: MenuDrawerProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const showDrawer = () => {
        setIsVisible(true);
    };

    const closeDrawer = () => {
        setIsVisible(false);
    };

  return (
    <>
    <Button onClick={showDrawer}>
        <Avatar />
    </Button>
    <Drawer
      anchor={anchor}
      open={isVisible}
      onClose={closeDrawer}
      >
        <Box
            sx= {{
                width: "80vw",
            }}
        >
            <Box sx={{padding: 2, paddingTop: 0}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
            }}>
                <Typography>Account Info</Typography>
                <IconButton>
                    <Close />
                </IconButton>
            </Box>

            <UserProfile 
                direction="row"
                sx={{
                    marginBottom: 1
                }}
            />
            <FollowStats />
            </Box>

            <Divider />

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2 />
                        </ListItemIcon>
                        <ListItemText>
                            Profile
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText>
                            Lists
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Bookmark />
                        </ListItemIcon>
                        <ListItemText>
                            Bookmarks
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText>
                            Settings
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText>
                            Log out
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
    </>
  )
}
