import React, { useContext } from 'react'
//import ConnectorIcon from '../../icons/ConnectorIcon'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ConnectorContext } from '../../../pages/connector';
import {config} from '../../../services/http-common';
import axios from "axios";
function ConnectorList({ data }: any) {

  const contextData: any = useContext(ConnectorContext)
  const handleClick = () => {
    contextData.setopenConnectorDetailTab(true)
    contextData.setConnectorDetailId(data)
  }

  const handleDelete = () => {
     let url=config.connectionManagement.baseURL+config.connectionManagement.deleteConnector;
    const reqData={
      "name":data.name,
      "orgId":data.id.toString()
    }
    console.log(reqData);
    const res = axios.post(url, reqData);
    alert('Deleted ...');
  }

  return (
    <div className='flex justify-between px-6 py-4 mt-2 items-center border border-gray-800	rounded hover:cursor-pointer'>
      <div className='flex items-center' style={{width:"25%"}} onClick={handleClick}>
        {/* <ConnectorIcon /> */}
        <div className='font-extrabold ml-3'>{data.name}</div>
      </div>
      <div className='h-3.5 w-3.5 rounded-full' style={{ backgroundColor: "rgb(34 197 94)" }} onClick={handleClick}></div>
      <div className='text-xs opacity-60' onClick={handleClick}>Synched every {data.lastSyncedTime}</div>
      <div className='opacity-60'>
        <SettingsOutlinedIcon sx={{ marginRight: "5px" }} onClick={handleClick}/>
        <DeleteOutlineOutlinedIcon onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default ConnectorList