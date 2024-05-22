import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

const Senha = () => {
    const [senha,setSenha] = useState('');
    return(
            <Grid size ='small'>
                <FormControl size ='small'>
                    <Input id="login_senha" aria-describedby="login_senha_helper_text" value={senha} onChange={e => { setSenha(e.target.value) }} />
                    <FormHelperText id="login_senha_helper_text">Senha</FormHelperText>
                </FormControl>
            </Grid>      
    );
}

export default Senha;