import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PixleKubeLogo from "../../../assets/icons/pixelkube-logo.svg"
const submit = () => {
    //signIn("keycloak");
    window.alert("SignIn clicked and hitched");
}

const signInform =()=>{
    return(
        <div className='p-20'>
            <PixleKubeLogo className=" inline-block p-20" style={{ width:"inherit", height:"inherit",transform:"scale(2.5)"}} />
            <h1 className="text-3xl font-bold mb-10"> <span className='text-blue-400'>Welcome</span> user,</h1>
            <p className="text-2xl mb-5 pb-10">
                You will be redirected to organizational authentication portal on the click or touch of the login button.
            </p>
            <Button sx={{ textTransform: 'none' }} 
                className='px-20 mt-3 text-2xl'
                onClick={submit}
                size="medium"
                variant="contained"
                >
                    Login
            </Button>
            
        </div>
    );
}

export default signInform;