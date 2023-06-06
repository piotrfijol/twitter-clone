import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Menu, Paper } from "@mui/material"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import ModeIcon from '@mui/icons-material/Mode'
import { ExpandLess, ExpandMore, Equalizer, RocketLaunch, OpenInNew, Money, Settings, Help } from "@mui/icons-material"
import { useState } from "react"
import { StyledNavLink } from "./StyledNavLink"



export const MoreMenu = (props: any) => {
    const [isCreatorExpanded, setIsCreatorExpanded] = useState(false);
    const [isToolsExpanded, setIsToolsExpanded] = useState(false);
    const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);

    const toggleCreator = () => {setIsCreatorExpanded(!isCreatorExpanded)}
    const toggleTools = () => {setIsToolsExpanded(!isToolsExpanded)}
    const toggleSettings = () => {setIsSettingsExpanded(!isSettingsExpanded)}

    return (
      <Paper sx={{ width: 520, maxWidth: '100%', textAlign: 'left' }}>
        <Menu {...props}>
          <ListItemButton>
            <ListItemIcon>
              <AlternateEmailIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Connect</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Drafts</ListItemText>
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={toggleCreator}>
            <ListItemText>Creator Studio</ListItemText>
            {isCreatorExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {isCreatorExpanded ? (
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <Equalizer />
                      </ListItemIcon>
                      <ListItemText primary="Analytics" />
                    </ListItemButton>
                </List>) : null}

          <ListItemButton onClick={toggleTools}>
            <ListItemText>Professional Tools</ListItemText>
            {isToolsExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {isToolsExpanded ? (
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <RocketLaunch />
                      </ListItemIcon>
                      <ListItemText primary="Twitter for Professionals" />
                    </ListItemButton>
                    
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <OpenInNew />
                      </ListItemIcon>
                      <ListItemText primary="Twitter Ads" />
                    </ListItemButton>
                    
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <Money />
                      </ListItemIcon>
                      <ListItemText primary="Monetization" />
                    </ListItemButton>
                </List>) : null}

          <ListItemButton onClick={toggleSettings}>
            <ListItemText>Settings and Support</ListItemText>
            {isSettingsExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {isSettingsExpanded ? (
                <List component="div" disablePadding>
                  <StyledNavLink to="">
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <Settings />
                      </ListItemIcon>
                      <ListItemText primary="Settings and privacy" />
                    </ListItemButton>
                  </StyledNavLink>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                          <Help />
                      </ListItemIcon>
                      <ListItemText primary="Help center" />
                    </ListItemButton>
                </List>) : null}

        </Menu>
      </Paper>
    )
  }
  