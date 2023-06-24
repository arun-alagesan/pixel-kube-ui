import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Cofee from "/assets/icons/coffee.svg"
import Lunch from "/assets/icons/lunch.svg"
import Snack from "/assets/icons/snack.svg"
import IncDecCounter from '../../../components/incDecCounter';
import Router from "next/router";

const AddServicesModal = (props: any) => {

    let routeUrl='';
    console.log(props);
    if(props.modalFrom==="bookService")
        routeUrl="/bookSpaces/bookService/confirmMeeting";
    const onAddServiceClick = () => {
        routeUrl=='' ?props.onClose():Router.push(routeUrl);
    }

    return (
        <div>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Select Services
            </Typography> */}
            <Grid sx={{margin: "20px 20px 0px 0px"}} container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid xs={1}><Cofee/></Grid>
                <Grid xs={5}><Typography>Select Services</Typography></Grid>
                <Grid xs={6}><IncDecCounter></IncDecCounter></Grid>
                <Grid xs={1}><Snack /></Grid>
                <Grid xs={5}><Typography>Snacks</Typography></Grid>
                <Grid xs={6}><IncDecCounter></IncDecCounter></Grid>
                <Grid xs={1}><Lunch /></Grid>
                <Grid xs={5}><Typography>Lunch</Typography></Grid>
                <Grid xs={6}><IncDecCounter></IncDecCounter></Grid>
            </Grid>
            <FormControl  sx={{ margin: "20px 0px 0px 0px" }} className="flex justify-center " size="small">
                <Button variant="contained"  onClick={onAddServiceClick}  >Add Services</Button>
            </FormControl>
        </div >
    );
};
export default AddServicesModal;