import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { SyntheticEvent, useContext, useState } from 'react';
import { PlayerContext } from '../../../../pages/player';
import styles from './playerDetails.module.css';

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PlayerDetails() {
    const [value, setValue] = useState(0);
    const [personName, setPersonName] = useState([]);
    const [age, setAge] = useState('');
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
    const handleChangeMultiple = () => {
        console.log("Do something");
    }
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const { connectorDetailId, setOpenPlayerDetailTab}: any = useContext(PlayerContext)
    return (
        <Box sx={{ width: '100%' }} className={styles.playerdetails}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <button className="opacity-30 ml-auto absolute right-2.5 top-2.5" onClick={() => setOpenPlayerDetailTab(false)}>✖</button>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Settings" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-6 border rounded-lg p-6 border-gray-400'>
                        <div className='w-[250px] border rounded-2xl p-3 border-gray-400 relative'>
                            <div className={styles.ipadLogo}></div>
                            {/* <img src={logo} alt="Logo" /> */}
                        </div>
                        <div className='flex-grow text-left'>
                            <div className='text-2xl font-semibold'>Waveshare HDMI LCD Display</div>
                            <div className='text-gray-400 mt-6'>Location</div>
                            <div className='text-lg mt-2 font-semibold'>Meeting Room 1, Desk 2, Pearl Garden, Brooklyn, UK</div>
                            <div className='mt-6 flex'>
                                <div className='mr-10'>
                                    <div className='text-gray-400'>Resolution</div>
                                    <div className='mt-2 text-lg font-semibold'>1920 x 1080</div>
                                </div>
                                <div className='pl-10 border-l border-gray-400'>
                                    <div className='text-gray-400'>Orientation</div>
                                    <div className='mt-2 text-lg font-semibold'>Landscape</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col w-2/4 border rounded-lg border-gray-400'>
                            <div className='flex justify-between p-3 text-left'>
                                <span className='text-lg font-semibold'>Events</span>
                                <span className='text-lg font-semibold hidden'>Setting</span>
                            </div>
                            <div className='flex flex-col gap-4 border-t border-gray-400 p-3 h-56 overflow-y-auto'>
                                <div className='border-t-4 border-b-4 p-4 bg-blue-100 border-t-green-400 border-b-gray-400'>
                                    <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                    <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                    <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                                </div>
                                <div className='p-4'>
                                    <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                    <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                    <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 border rounded-lg border-gray-400'>
                            <div className='flex justify-between p-3 text-left'>
                                <span className='text-lg font-semibold'>Channel</span>
                                <span className='text-lg font-semibold'>Setting</span>
                            </div>
                            <div className='flex flex-col gap-4 border-t border-gray-400 p-3 h-56 overflow-y-auto '>
                                <div className='border-t-4 border-b-4 p-4 bg-blue-100 border-t-green-400 border-b-gray-400'>
                                    <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                    <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                    <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                                </div>
                                <div className='p-4'>
                                    <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                    <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                    <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg border-gray-400'>
                        <div className='flex justify-between p-3 text-left'>
                            <span className='text-lg font-semibold'>Device Activity Logs</span>
                            <span className='text-lg font-semibold hidden'>Setting</span>
                        </div>
                        <div className='flex flex-col gap-4 border-t border-gray-400 p-3 h-56 overflow-y-auto '>
                            <div className='border-t-4 border-b-4 p-4 bg-blue-100 border-t-green-400 border-b-gray-400'>
                                <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                            </div>
                            <div className='p-4'>
                                <div className='mt-2 text-lg font-semibold'>11:00 - 12:00</div>
                                <div className='mt-2 text-lg font-semibold'>Review meeting with client - Marketing Team</div>
                                <div className='mt-2 text-lg font-semibold'>John Walker, fardeen, Diya Stakes, etc...</div>
                            </div>
                        </div>
                    </div>
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <FormControl className='w-6/12' size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChangeMultiple}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-6/12' size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChangeMultiple}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex gap-4'>
                        <FormControl className='w-6/12' size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChangeMultiple}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-6/12' size="small">
                            <InputLabel id="demo-select-small">Age</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChangeMultiple}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </TabPanel>
        </Box>
    );
}
