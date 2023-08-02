import Button from '@mui/material/Button';
import {signIn} from "next-auth/react"
const submit = () => {
    signIn("keycloak",{callbackUrl: "/"});
}

const signInform =()=>{
    return(
        <div className='p-10'>
            <h1 className="text-3xl font-bold mb-10"> Welcome user</h1>
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