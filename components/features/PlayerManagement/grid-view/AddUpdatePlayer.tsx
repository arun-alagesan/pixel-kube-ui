import { useForm } from "react-hook-form";
import React, { useMemo, useEffect,useState, useContext } from "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, SelectChangeEvent } from "@mui/material";
import Router, {useRouter} from 'next/router';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Layout from '../../../../components/Layout';
import Breadcrumbs from "../../../../components/common/Breadcrumbs";
import ApiResponse from "../../../../models/ApiResponse";
import PlayerManagementService from "../../../../services/player.service";
import PlayerList from "../../../../models/player/PlayerList";
import styles from './AddPlayer.module.css';
import { PlayerContext } from '../../../../pages/player';

const schema = yup.object().shape({
    serialNumber: yup.string().required('Serial Number is required'),
    deviceName: yup.string().required('Device Name is required'),
    ipAddress: yup.string().required('IP Address is required'),
    department: yup.string().required('Department is required'),
    locationName: yup.string().required('Location is required'),
    contactPerson: yup.string().required('Contact Person is required'),
    resolution: yup.string().required('Resolution is required'),
    spaceName: yup.string().required('SpaceName is required'),
    theme: yup.string().required('Theme is required'),
    orientation: yup.string().required('Orientation is required')
  });

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
} 


//type props = {playerList?: PlayerList};
//const AddUpdatePlayer = (props: any) => {
export default function  AddUpdatePlayer(){ 
    const router = useRouter()
    const {id} = router.query
    const  isAddUser = id ? false : true ;
    const [loader, setLoader] = useState<boolean>(false);
    const [playerList, setPlayerList] = useState<PlayerList>();

    const { register, handleSubmit, setValue, formState: { errors, defaultValues } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: useMemo(() => {
          return playerList;
        }, [playerList])
      });

      const handleChange = (event: SelectChangeEvent) => {
        // debugger;
        // let roleId = event.target.value ? parseInt(event.target.value) : 0;
        // setRoleId(roleId);
      };

    const onSubmit = async (data: any) => {
        debugger;
        console.log("form data", data);
        var formData: any = {};
        for (var key in data) {
            formData[key] = data[key];
        }

        let response: ApiResponse;
        //if(isAddUser){
            response = await PlayerManagementService.addPlayer(formData);
        //}
        // else{
        //     response = await UsermanagementService.updateUser(formData);
        // }

        if(response.status == true){
            setOpenAddPlayerTab(false);
        }

        console.log("PlayerManagementService addUser", response);
    }    

    const { setOpenAddPlayerTab}: any = useContext(PlayerContext)
    //let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'User Management', 'path': '/user' }, { 'name': 'User Management', 'path': '/user/UserManagement' }];  
    return(
            // <Layout>
            // <h2 className="text-xl font-bold"> {isAddUser ?  'Add Player' : 'Edit Player'}</h2>
            // <Breadcrumbs currentPage={isAddUser ?  'Add Player' : 'Edit Player'} routes={breadcrumbPaths}/>
            // {
                <Box sx={{ width: '100%' }} className={styles.playerdetails}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <button className="opacity-30 ml-auto absolute right-2.5 top-2.5" onClick={() => setOpenAddPlayerTab(false)}>✖</button>
                        <Tabs value={0} aria-label="basic tabs example">
                            <Tab label="Add Player" />
                        </Tabs>
                    </Box>
                    <TabPanel value={0} index={0}>
                    <div  className="container">
                        {loader ? <div>Loading... </div> :
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('serialNumber')} fullWidth label="Serial Number" variant="outlined" className="pk-input"
                                        error={!!errors.serialNumber}
                                        helperText={errors.serialNumber?.message?.toString()}
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('deviceName')} fullWidth label="Device Name" variant="outlined" className="pk-input"
                                        error={!!errors.deviceName}
                                        helperText={errors.deviceName?.message?.toString()}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('ipAddress')} fullWidth label="IP Address" variant="outlined" className="pk-input"
                                        error={!!errors.ipAddress}
                                        helperText={errors.ipAddress?.message?.toString()}
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('department')} fullWidth label="Department" variant="outlined" className="pk-input"
                                        error={!!errors.department}
                                        helperText={errors.department?.message?.toString()}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('locationName')} fullWidth label="Location" variant="outlined" className="pk-input"
                                        error={!!errors.locationName}
                                        helperText={errors.locationName?.message?.toString()}
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 mt-3">
                                        <TextField {...register('contactPerson')} fullWidth label="Contact Person" variant="outlined" className="pk-input"
                                        error={!!errors.contactPerson}
                                        helperText={errors.contactPerson?.message?.toString()}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-12 col-md-8 mt-3">
                                        <FormControl fullWidth className="pk-dropdown" error={!!errors.resolution} >
                                            <InputLabel id="demo-simple-select-label">Resolution</InputLabel>
                                            <Select {...register('resolution')}  labelId="demo-simple-select-label"  onChange={handleChange}
                                            id="demo-simple-select" label='resolution' >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'1020 x 720'}>1020 x 720</MenuItem>
                                                <MenuItem value={'1360 x 720'}>1360 x 720</MenuItem>
                                                <MenuItem value={'1920 x 720'}>1920 x 720</MenuItem>
                                            </Select>
                                            {errors.resolution && <FormHelperText>{errors.resolution.message?.toString()}</FormHelperText>}
                                        </FormControl>  
                                    </div>
                                    <div className="col-12 col-md-8 mt-3">
                                        <FormControl fullWidth className="pk-dropdown" error={!!errors.spaceName} >
                                            <InputLabel id="demo-simple-select-label">Space</InputLabel>
                                            <Select {...register('spaceName')}  labelId="demo-simple-select-label"  onChange={handleChange}
                                            id="demo-simple-select" label='Space Name'>
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'Einstein - Meeting Room'}>Einstein - Meeting Room</MenuItem>
                                                <MenuItem value={'Edision - Meeting Room'}>Edision - Meeting Room</MenuItem>
                                                <MenuItem value={'Tesla - Meeting Room'}>Tesla - Meeting Room</MenuItem>
                                            </Select>
                                            {errors.spaceName && <FormHelperText>{errors.spaceName.message?.toString()}</FormHelperText>}
                                        </FormControl>  
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-8 mt-3">
                                    <FormControl fullWidth className="pk-dropdown" error={!!errors.theme} >
                                        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                                        <Select {...register('theme')}  labelId="demo-simple-select-label"  onChange={handleChange}
                                        id="demo-simple-select" label='Theme'>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Corporate Theme'}>Corporate Theme</MenuItem>
                                            <MenuItem value={'Twenty'}>Twenty</MenuItem>
                                            <MenuItem value={'Thirty'}>Thirty</MenuItem>
                                        </Select>
                                        {errors.theme && <FormHelperText>{errors.theme.message?.toString()}</FormHelperText>}
                                    </FormControl>  
                                    </div>
                                    <div className="col-12 col-md-8 mt-3">
                                    <FormControl fullWidth className="pk-dropdown" error={!!errors.orientation} >
                                        <InputLabel id="demo-simple-select-label">Orientation</InputLabel>
                                        <Select {...register('orientation')}  labelId="demo-simple-select-label"  onChange={handleChange}
                                        id="demo-simple-select" label='Orientation'>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Landscape'}>Landscape</MenuItem>
                                            <MenuItem value={'Portrait'}>Portrait</MenuItem>
                                        </Select>
                                        {errors.orientation && <FormHelperText>{errors.orientation.message?.toString()}</FormHelperText>}
                                    </FormControl>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center mt-4">
                                        <Button variant="contained" type="submit">{isAddUser ?  'Add Player' : 'Update Player'}</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    } 
                    </div>
                    </TabPanel>
                </Box>
                
            // }
            // </Layout>
    );
}


//export default AddUpdatePlayer 