import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link} from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title= 'Crear Cuenta'>
      <form>
          <Grid container>
            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Nombre' 
                type="text" 
                placeholder="Ingrese nombre" 
                fullWidth
                required
              />           
            </Grid>
            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Apellido' 
                type="text" 
                placeholder="Ingrese Apellido" 
                fullWidth
                required
              />           
            </Grid>
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
              <Grid item xs={ 12 }>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } underline="none" to='/auth/LoginPage' >
              Ingresar
            </Link>
          </Grid>
      </form>
    </AuthLayout>
        
  )
}
