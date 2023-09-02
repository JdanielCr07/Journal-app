import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link} from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title= 'Inicio de sesión'>
      <form>
          <Grid container>
            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Correo' 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                required
              />           
            </Grid>

            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Contraseña' 
                type="password" 
                placeholder="contraseña" 
                fullWidth
                required
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } underline="none" to='/auth/Register' >
              {"Crear una cuenta"}
            </Link>
          </Grid>
      </form>
    </AuthLayout>
        
  )
}
