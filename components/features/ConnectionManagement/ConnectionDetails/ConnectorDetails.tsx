import React, {useContext} from 'react'
import styles from './connector.module.css'
import { ConnectorContext } from '../../../../pages/connector'
import  Tabs  from './Tabs'

function ConnectorDetails() { 
  const { connectorDetailId, setopenConnectorDetailTab}: any = useContext(ConnectorContext)
  console.log(connectorDetailId)
  return (

    <div className={styles.connectordetails}>
      <div className='flex justify-between font-bold'> 
        <h2 className='flex'>{connectorDetailId.name}<div className='h-3.5 w-3.5 rounded-full' style={{backgroundColor: "rgb(34 197 94)"}} ></div></h2>
        <button className="opacity-30 ml-auto	" onClick={() => setopenConnectorDetailTab(false)}>✖</button>
      </div>
      <div className='text-xs opacity-70'>Data Synched {connectorDetailId.lastSyncedTime} ago</div>
      <Tabs/>
    </div>
  )
}

export default ConnectorDetails