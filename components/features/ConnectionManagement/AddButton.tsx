import GoogleLoginButton from "../GoogleLogin/LoginButton";
import Button from "../../common/Button";
import { GoogleOAuthProvider } from '@react-oauth/google';

const ButtonSelector: any = {
    'None': Button,
    '10' : GoogleLoginButton,
    '20' : Button,
    '30' : Button,
    '40' : Button,
    '50' : Button,
    '60' : Button,
    '70' : Button,
}
const clientId = "531686912380-bt5qnls2h1vi4omu0c4ti2fmhdi0f1ib.apps.googleusercontent.com"


export default function AddButton({onClose, calenderValue}: any , props:any) {
    const SelectedButton: any = ButtonSelector[calenderValue ? calenderValue : '70']
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <SelectedButton {...props} style="w-full"> 
                Add
            </SelectedButton>
        </GoogleOAuthProvider>
    )


}