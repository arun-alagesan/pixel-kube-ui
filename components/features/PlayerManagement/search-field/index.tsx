import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import {atom, useRecoilState } from "recoil";

export const playerSearchTextAtom = atom<string>({
  key: "playerSearchTextAtom",
  default: '',
});

export default function CustomizedInputBase() {

  const [playerSearchText, setPlayerSearchTextAtom] = useRecoilState(playerSearchTextAtom);
  const onChange = (input) => {
    setPlayerSearchTextAtom(input.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Device Name, Location..."
        inputProps={{ 'aria-label': 'search device name, location' }}
        onChange={onChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}