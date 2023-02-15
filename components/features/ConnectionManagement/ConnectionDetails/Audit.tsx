import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ConnectorManagementService from '../../../../services/connectorManagement.service';
import LogDetails from '../../../../models/connector/logDetails';
import moment from 'moment';
const marginVal = '40px'

function Audit() {

  const [audits, setAudits] = useState<LogDetails[]>([])

  useEffect(() => {
    FetchAuditAndLog();
  }, []);
  async function FetchAuditAndLog() {

    var auditLog = await ConnectorManagementService.getAuditAndLogs("Pixel ser acc 2");
    setAudits(auditLog.audits)
  }


  return (
    <TableContainer sx={{ margin: '20px', width: `calc(100% - ${marginVal})` }} component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#dee2e6' }}>
            <TableCell >Activity</TableCell>
            <TableCell >Edited By</TableCell>
            <TableCell >Date & Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {audits.map((row, index) => (
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
  )
}

export default Audit