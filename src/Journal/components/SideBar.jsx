import {  Dashboard, EngineeringRounded, LocalShippingRounded, SettingsAccessibility, SettingsRounded} from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography} from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm:0} }}
    
    >
        <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'> 
                        Jose Castro 
                    </Typography>
                </Toolbar>
                <Divider/>

            <List>
                {['Dashboard', 'Vehiculo', 'Mantenimientos'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        {index % 3 === 0 ? <Dashboard /> : index % 3 === 1 ? <LocalShippingRounded/> : <EngineeringRounded />}
                        </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Opciones'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <SettingsRounded />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Drawer>
        
    </Box>
  )
}
