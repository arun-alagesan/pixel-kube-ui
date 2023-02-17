import React from "react";
import Layout from "../../components/Layout";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, DialogTitle, IconButton, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import Router from "next/router";
import FormLabel from '@mui/material/FormLabel';
import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import roomData from "../data/bookRoomData.json";
import dayjs, { Dayjs } from "dayjs";
import SpaceContext from "../context/BookSpaceContext";
import SystemManagement from "../../assets/icons/systemmanagement.svg";
import AdminApps from "../../assets/icons/admin.svg";
import SpaceManagement from "../../assets/icons/spacemanagement.svg";
import CalendarIcon from "../../assets/icons/calendarIcon.svg"

import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import ServiceModal from "../Modals/servicesModal";
import CloseIcon from '@mui/icons-material/Close';
import DialogModal from "../../components/common/dialogModal";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BookMeetingForm = () => {


  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange1 = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [valueTab, setValueTab] = React.useState(0);
  const spaceContextValue = React.useContext(SpaceContext);
  const [value, setValue] = React.useState<Dayjs | null>(spaceContextValue.bookRoomInfo.startDate);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const onBookMeetClick = () => {
    Router.push("/bookroom/confirmMeeting");
  }

  return (
    <Layout>
      <div className="flex justify-between sm:block sm:px-16 mt-4 px-16 md:px-2">
        <div className="col-md-6 flex md-flex-wrap justify-between">
          <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent">
            <img src={"../assets/images/userprofile.png"} alt="" className="float-left md:float-none sm:float-none lg:float-none" width="100" height="60" />
            <CardContent className="float-right">
              <Typography gutterBottom variant="h5" component="div" className="text-base">
                Einstein - Meeting Room
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-xs">
                2nd Floor, Smartcity, UK
              </Typography>
              <div className="pt-2">
                <Grid container spacing={2}>
                  <Grid xs={2}>
                    <SystemManagement />
                  </Grid>

                  <Grid xs={2}>
                    <AdminApps />
                  </Grid>

                  <Grid xs={2}>
                    <SpaceManagement />
                  </Grid>
                </Grid>
              </div>
            </CardContent>

          </Card>
        </div>
        <div className="col-md-6 lg:flex md:flex flex justify-end items-end sm:block">
          <div className="flex justify-between items-end md-flex-wrap md:block sm:block lg:block">
            <div className="px-4">
              <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent h-20">
                <div className="float-left pt-5 pl-1.5">
                  <CalendarIcon />
                </div>
                <CardContent className="float-right sm:float-none sm:pl-12 p-3">
                  <Typography gutterBottom variant="h5" component="div" className="text-xs text-text-light">
                    Start Date & Start Time
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-xs font-bold">
                    January 20
                    <span className="px-1">5.30 PM</span>
                  </Typography>

                </CardContent>

              </Card>
            </div>

            <div className="flex md-flex-wrap md:block sm:block justify-between items-end">
              <div className="px-4">
                <Card sx={{ maxWidth: 345 }} className="shadow-none bg-transparent h-20">
                  <div className="float-left pt-5 pl-1.5">
                    <CalendarIcon />
                  </div>
                  <CardContent className="float-right sm:float-none sm:pl-12 p-3">
                    <Typography gutterBottom variant="h5" component="div" className="text-xs text-text-light">
                      End Date & End Time
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="text-xs font-bold">
                      January 20
                      <span className="px-1">5.30 PM</span>
                    </Typography>
                    <div className="pt-2">

                    </div>
                  </CardContent>

                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <FormGroup>
        <div className="row w-full text-sm mt-4 px-80 lg:px-2 md:px-2 sm:px-1">

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
              <TextField id="outlined-basic" label="Meeting Title" variant="outlined" />
            </FormControl>

            <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
              <InputLabel id="demo-multiple-chip-label">Participants</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple rows={4}
                value={personName}
                onChange={handleChange1}
                input={<OutlinedInput id="select-multiple-chip" label="Participants" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
              <TextField id="outlined-basic" label="Notes" variant="outlined" multiline rows={4} />
            </FormControl>

            <div className="flex">
              <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                <InputLabel id="locationLabel">Meeting Type</InputLabel>
                <Select labelId="locationLabel" label="Meeting Type" className="text-sm">
                  {roomData.locations.map((x) => {
                    return <MenuItem value={x.id}>{x.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ margin: "20px 0px 0px 20px" }} size="small">
                <InputLabel id="locationLabel">Notification</InputLabel>
                <Select labelId="locationLabel" label="Notification" className="text-sm">
                  {roomData.locations.map((x) => {
                    return <MenuItem value={x.id}>{x.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <br></br>
            <div className="text-sm">
              <Stack direction="row" spacing={5}>
                <Button variant="outlined" className="flex-1 w-64" onClick={handleOpen}>Add Services</Button>
                <Button variant="outlined" className="flex-1 w-64">Add Parking</Button>
              </Stack>
            </div>
            <div className="text-sm">
              <FormControl fullWidth sx={{ margin: "20px 20px 0px 0px" }} size="small">
                <Button variant="contained" className="w-100" onClick={() => onBookMeetClick()}>Book Meeting</Button>
              </FormControl>
            </div>
          </div>
        </div>
        {/* <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Box sx={style}>
              <ServiceModal onClose={handleClose}></ServiceModal>
            </Box>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        </Modal> */}

        <DialogModal open={open} onClose={handleClose} modalTitle="Select Services" >
          <ServiceModal onClose={handleClose} ></ServiceModal>
        </DialogModal>

      </FormGroup>
    </Layout>
  );
};
export default BookMeetingForm;