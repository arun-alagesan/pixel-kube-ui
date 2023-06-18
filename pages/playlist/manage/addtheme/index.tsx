import * as React from "react";
import Layout from "../../../../components/Layout";
import Button from "../../../../components/common/Button";
import Breadcrumbs from "../../../../components/common/Breadcrumbs";
import { themeService } from "../../../../services/theme.service";
import {
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
let breadcrumbPaths = [
  { name: "Home", path: "/" },
  { name: "Content Management", path: "/playlist" },
  { name: "Theme Management", path: "/playlist/manage/theme" },
];
const names = [
    'English India',
    'Hindi',
    'English USA',
    'English UK',
    'Arabic',
    'Spanish',
    'French',
    'German',
  ];
export default function AddTheme() {
  //   const [theme, setTheme] = React.useState<any>([]);
  const [age, setAge] = React.useState("");
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = () => {};
  //   React.useEffect(() => {
  //     setTheme(themeService.getAllThemes());
  //   }, []);
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  return (
    <Layout>
      <div className="flex justify-between items-center m-6">
        <div>
          <h2 className="text-xl font-bold">Theme Management</h2>
          <Breadcrumbs currentPage={"Edit Theme"} routes={breadcrumbPaths} />
        </div>
        <Button style='px-10 py-2'>Update</Button>
      </div>

      <div className="flex gap-[3%] m-6">
        <div className="flex basis-1/3 flex-col">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-helper-label">
              Base Theme
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Base Theme"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Corporate Light</MenuItem>
            </Select>
          </FormControl>
          <div className="flex justify-between mt-4 text-slate-500">
            <span>Allow Booking</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Confirm Booking</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Change End Time</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>End booking</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Show Organizer</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Allow Booking</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Hide Subject</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Find Room</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Enable Fault Reporting</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Access Settings</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Enable LED Status</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Scroll Subject</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-slate-500">
            <span>Signage on Availability</span>
            <Switch
              // checked={loading}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
        </div>
        <div className="flex basis-1/3 flex-col">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-helper-label">
              Theme Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Corporate Theme"
              onChange={handleChange}
              className={"w-[82%]"}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Corporate Light</MenuItem>
            </Select>
          </FormControl>
          <div className="flex gap-2 mt-4 text-slate-500 items-center w-[200px] justify-between">
            <span>Available Status Color</span>
            <span className="h-[24px] w-[24px] bg-red-500 rounded-sm cursor-pointer"></span>
          </div>
          <div className="flex gap-2 mt-4 text-slate-500 items-center w-[200px] justify-between">
            <span>Occupied Status Color</span>
            <span className="h-[24px] w-[24px] bg-green-600 rounded-sm cursor-pointer"></span>
          </div>
        
          <div className="flex gap-2 mt-6 text-slate-500 items-center ">
            <span className="basis-3/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Subject Font
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Subject font"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Corporate Light</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span className="basis-1/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>12px</MenuItem>
                </Select>
              </FormControl>
            </span>
          </div>
          <div className="flex gap-2 mt-6 text-slate-500 items-center ">
            <span className="basis-3/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Organizer Font
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Subject font"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Corporate Light</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span className="basis-1/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>12px</MenuItem>
                </Select>
              </FormControl>
            </span>
          </div>
          <div className="flex gap-2 mt-6 text-slate-500 items-center ">
            <span className="basis-3/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Upcoming Meeting Subject
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Subject font"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Corporate Light</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span className="basis-1/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>12px</MenuItem>
                </Select>
              </FormControl>
            </span>
          </div>
          <div className="flex gap-2 mt-6 text-slate-500 items-center ">
            <span className="basis-3/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Upcoming Meeting Organizer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Subject font"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Corporate Light</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span className="basis-1/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>12px</MenuItem>
                </Select>
              </FormControl>
            </span>
            
          </div>
          <div className="flex gap-2 mt-6 text-slate-500 items-center ">
            <span className="basis-3/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Watermark Playlist
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Watermark Playlist"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Corporate Light</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span className="basis-2/5">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Signage Playlist
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Signage Playlist"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>12px</MenuItem>
                </Select>
              </FormControl>
            </span>
            
          </div>
        </div>
        <div className="flex basis-1/3 flex-col gap-4">

        <div className="flex ml-2 gap-4 mb-4">
            <span className="flex flex-col gap-4">
                <span className="inline-block h-[150px] w-[150px] bg-slate-400"></span>
                <Button style='w-[100px]'>Logo</Button>
            </span>
            <span className="flex flex-col gap-4">
                <span className="inline-block h-[150px] w-[150px] bg-slate-400"></span>
                <Button style='w-[120px]'>Background</Button>
            </span>
        </div>
        <div className="flex w-full">
      <FormControl sx={{ m: 1, minWidth: 120 , width: 250}} >
        <InputLabel shrink htmlFor="select-multiple-native">
          Language
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
         fullWidth
         className="pt-2"
         sx={{"& .MuiNativeSelect-select" : {
            paddingTop : '0px',
            height: "250px",
            paddingBottom : '0px'
         }}}
          // @ts-ignore 
          onChange={handleChangeMultiple}
          onClick={(e) => console.log(e)}
          label="Language"
          inputProps={{
            id: 'select-multiple-native',

          }}
        >
          {names.map((name) => (
            <option key={name} value={name} className='text-slate-600'>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
        </div>
      </div>
    </Layout>
  );
}
