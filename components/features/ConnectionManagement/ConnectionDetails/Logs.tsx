import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../../../common/Button'

const marginVal = '40px'

function createData(
  activity: string,
  editedBy: string,
  dateAndTime: string,
) {
  return { activity, editedBy, dateAndTime};
}

const rows = [
  createData('Password Reset', "Techwiz", "01/10/2022 10:10 AM"),
  createData('Ownership Details removed', "System Admin", "01/10/2022 10:10 AM"),
  createData('Password Reset', "Tech", "01/10/2022 10:10 AM"),
  createData('Ownership Details removed', "Display Admin", "01/10/2022 10:10 AM"),
  createData('Ownership Details removed', "Techwiz", "01/10/2022 10:10 AM" ),
];

function Logs() {

return (
  <div className='flex flex-column items-center'>
  <div className='py-3'>
  <Button> Test Connection </Button>
  </div>
  <TableContainer sx={{ margin: '20px', width : `calc(100% - ${marginVal})` }}  component={Paper}>
  <Table size="small"  aria-label="simple table">
    <TableHead>
      <TableRow sx={{backgroundColor : '#dee2e6'}}>
        <TableCell >Activity</TableCell>
        <TableCell >Edited By</TableCell>
        <TableCell >Date & Time</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.activity}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.activity}
          </TableCell>
          <TableCell >{row.editedBy}</TableCell>
          <TableCell >{row.dateAndTime}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
);
}

export default Logs