import Button from '@mui/material/Button';

const submit = () => {
    //signIn("keycloak");
    window.alert("SignIn clicked and hitched");
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