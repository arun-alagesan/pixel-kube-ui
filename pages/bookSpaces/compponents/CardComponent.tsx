import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SystemManagement from "/assets/icons/systemmanagement.svg";
import AdminApps from "/assets/icons/admin.svg";
import SpaceManagement from "/assets/icons/spacemanagement.svg";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Result } from '../../../models/spacemgmt/Room/SearchResult';
import { Result as DeskResult}  from '../../../models/spacemgmt/Desk/SearchResult';

interface CardComponentProps {
    isCheckBox?: boolean;
    roomDetails?: Result;
    deskDetails?: DeskResult;
}


const CardComponent = ({ isCheckBox, roomDetails,deskDetails }: CardComponentProps) => {
    return (
        <div className="text-sm mt-4 px-2 md:px-2">
            <Card className='rounded-md' sx={{ width: 500 }}>

                <div className="float-left p-3.5">
                    {isCheckBox &&
                        <div className='flex items-center float-left p-0 m-0 h-28'>
                            <FormControlLabel control={<Checkbox />} label="" />
                        </div>
                    }
                    <img src={"/assets/images/userprofile.png"} alt="" className="rounded-md outline outline-1 ring-blue-500" width="100" height="60" />
                    <span className="relative inset-y-2">{roomDetails?.RoomID}</span>
                </div>

                <CardContent className="">
                    <div>
                        <Typography className='mb-0' gutterBottom variant="h6" component="div">{roomDetails?.RoomName}
                        </Typography>
                    </div>
                    <div>
                        <Typography className='mb-0' gutterBottom variant="h6" component="div">{deskDetails?.DeskName}
                        </Typography>
                    </div>
                    <div>
                        <Grid container spacing={1}>

                            <Grid xs={7}>
                                <Typography variant="body2" className="pl-0">{roomDetails?.Description}</Typography>
                            </Grid>
                            <Grid xs={7}>
                                <Typography variant="body2" className="pl-0">{deskDetails?.location}</Typography>
                            </Grid>

                            <Grid xs={1}>
                                <SystemManagement />
                            </Grid>

                            <Grid xs={1}>
                                <span>2</span>
                            </Grid>

                        </Grid>
                    </div>
                    {roomDetails?
                    <div className="pt-5">
                        <Grid container spacing={2}>
                            <Grid xs={1}>
                                <SystemManagement />
                            </Grid>
                            <Grid xs={4}>
                                <Typography variant="body2">Jan 20,2022</Typography>
                            </Grid>

                            <Grid xs={1}>
                                <SystemManagement />
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant="body2">10.00 AM - 11.00 AM</Typography>
                            </Grid>

                        </Grid>
                    </div>
                    :null
                    }

                    <div className="pt-5">
                        <Grid container spacing={2}>
                            <Grid xs={1.2}>
                                <SystemManagement />
                            </Grid>

                            <Grid xs={1.2}>
                                <AdminApps />
                            </Grid>

                            <Grid xs={1.2}>
                                <SpaceManagement />
                            </Grid>

                            <Grid xs={1.2}>
                                <SystemManagement />
                            </Grid>

                            <Grid xs={1.2}>
                                <AdminApps />
                            </Grid>

                            <Grid xs={1.2}>
                                <SpaceManagement />
                            </Grid>

                            <Grid xs={1.2}>
                                <SystemManagement />
                            </Grid>

                        </Grid>
                    </div>

                </CardContent>
            </Card>
        </div>
    );

};

export default CardComponent;