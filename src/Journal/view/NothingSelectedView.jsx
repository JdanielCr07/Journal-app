import { StarOutline } from "@mui/icons-material";
import { Grid, Typography,TextField, Link, Button} from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from '../../hooks/useForm';
import { Google } from "@mui/icons-material"
import {Link as RouterLink} from 'react-router-dom';

export const NothingSelectedView = () => {
  const dispatch1 = useDispatch() 

  const { email, password, onInputChange} = useForm({
    email: 'jose@google.com',
    password: '123456'
  });

  const onSubmit = (event)=>{
    event.preventDefault();

    console.log({email, password})
    dispatch1( checkingAuthentication() );
  }

  const onGoogleSignIn = () =>{
    console.log('onGoogleSingIn')
    dispatch1(startgGoogleSignIn())

  }
  return (
    <Grid 
      container
      spacing={0}
      direction= 'column'
      alignItems='center'
      justifyContent= 'center'
      sx={{ minHeight:' calc( 100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
      >
        <Grid item xs={12}>
            <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
          </Grid>
          <Grid item xs={12}>
            <Typography color='white' variant="h5">Selecciona o crea una entrada</Typography>
        </Grid>
        <form onSubmit={onsubmit}>
          <Grid container>
            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Correo' 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />           
            </Grid>

            <Grid item xs= { 12 } sx={{ mt : 2 }}>
              <TextField 
                label='Contraseña' 
                type="password" 
                placeholder="contraseña" 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type='submit' variant="contained" fullWidth>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
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




    </Grid>
)
    
}
