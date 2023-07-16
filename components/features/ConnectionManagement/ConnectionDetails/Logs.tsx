import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../../../common/Button'
import LogDetails from '../../../../models/connector/logDetails';
import ConnectorManagementService from '../../../../services/connectorManagement.service';
import moment from 'moment';
import { ConnectorContext } from '../../../../pages/connector';

const marginVal = '40px'


function Logs() {

  const contextData: any = useContext(ConnectorContext);
  const [logs, setLogs] = useState<LogDetails[]>([])

  useEffect(() => {
    FetchAuditAndLog();
  }, []);
  async function FetchAuditAndLog() {

    var connectorname =contextData.connectorDetailId.name ?contextData.connectorDetailId.name :"Pixel ser acc 2";
    console.log(connectorname);
    var auditLog = await ConnectorManagementService.getAuditAndLogs(connectorname);
    setLogs(auditLog.logs)
  }

  return (
    <div className='flex flex-column items-center'>
      <div className='py-3'>
        <Button> Test Connection </Button>
      </div>
      <TableContainer sx={{ margin: '20px', width: `calc(100% - ${marginVal})`, maxHeight: 370 }} component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dee2e6' }}>
              <TableCell >Activity</TableCell>
              <TableCell >Edited By</TableCell>
              <TableCell >Date & Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.message}
                </TableCell>
                <TableCell >{row.userId}</TableCell>
                <TableCell >{moment(row.auditTime).format("MM/DD/YYYY HH:MM A")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Logs