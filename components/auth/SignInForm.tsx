import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PixleKubeLogo from "../../assets/icons/pixelkube-logo.svg"
import {signIn} from "next-auth/react";
const submit = () => {
    signIn("keycloak",)
}

const signInform =()=>{
    return(
        <div className='p-20'>
            <PixleKubeLogo className=" inline-block p-20" style={{ width:"inherit", height:"inherit",transform:"scale(2.5)"}} />
            <TextField
                margin="normal"
                id="username"
                label="User Name"
                type="text"
                fullWidth
                variant="outlined"
                color="primary"
            />
            <TextField
                margin="normal"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
            />
            <div className='flex justify-between pt-2 mb-5'>
                <label className="flex items-center ">
                    <input type="checkbox" name="rememberme" className='mr-1  h-[1.125rem] w-[1.125rem]' />
                    Remember me
                </label>
                <a href="/forgotme" className='text-blue-400'>
                    Forgot Password?
                </a>
            </div>
            <Button sx={{ textTransform: 'none' }} 
                className='p-4 mt-3 text-2xl'
                onClick={submit}
                size="medium"
                variant="contained"
                fullWidth>
                    Login
            </Button>
            
        </div>
    );
}

export default signInform;