import React, { useContext } from 'react'
//import ConnectorIcon from '../../icons/ConnectorIcon'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ConnectorContext } from '../../../pages/connector';
function ConnectorList({ data }: any) {

  const contextData: any = useContext(ConnectorContext)
  const handleClick = () => {
    contextData.setopenConnectorDetailTab(true)
    contextData.setConnectorDetailId(data)
  }

  return (
    <div className='flex justify-between px-6 py-4 mt-2 items-center border border-gray-800	rounded hover:cursor-pointer' onClick={handleClick}>
      <div className='flex items-center' style={{width:"25%"}}>
        {/* <ConnectorIcon /> */}
        <div className='font-extrabold ml-3'>{data.name}</div>
      </div>
      <div className='h-3.5 w-3.5 rounded-full' style={{ backgroundColor: "rgb(34 197 94)" }} ></div>
      <div className='text-xs opacity-60'>Synched every {data.lastSyncedTime}</div>
      <div className='opacity-60'>
        <SettingsOutlinedIcon sx={{ marginRight: "5px" }} />
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  )
}

export default ConnectorList