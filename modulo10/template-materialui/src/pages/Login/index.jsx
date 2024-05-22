import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
    const [login,setLogin] = useState('');
    return(
            <Grid item size ='small'>
                <FormControl size ='small'>
                    <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
                    <FormHelperText id="login_nome_helper_text">Username</FormHelperText>
                </FormControl>
            </Grid>      
    );
}

export default Login;