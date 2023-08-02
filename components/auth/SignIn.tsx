
import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const SignIn = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log ("Form submitted");
        setOpen(false);
    };

    const authtenticate = () => {
        console.log("Invoked Authenticate method");
        signIn("keycloak");
    } 
    
    return (
        <div style={{ padding : '10%' }}>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="public/assets/images/meeting_logo.png"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Sign In
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Your have to sign in to access the application. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={authtenticate}>Sign In</Button>
                    <Button size="small" onClick={handleClickOpen}>Sign up</Button>
                </CardActions>
                </Card>
            </Container>

            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Sign up</DialogTitle>
            <DialogContent>
                    <DialogContentText>
                        Sign Up with details
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="emailaddress"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="username"
                        label="User Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}



export default SignIn;