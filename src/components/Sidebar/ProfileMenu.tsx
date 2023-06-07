import { ListItemButton, ListItemText, Menu, Paper } from "@mui/material"



export const ProfileMenu = (props: any) => {

    return (
      <Paper sx={{ width: 520, maxWidth: '100%', textAlign: 'left' }}>
        <Menu {...props}>
          <ListItemButton>
            <ListItemText>Add an existing account</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Log out @nickname123</ListItemText>
          </ListItemButton>
        </Menu>
      </Paper>
    )
  }
  