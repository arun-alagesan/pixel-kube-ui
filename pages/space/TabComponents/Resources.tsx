import * as React from 'react';
import Devices from "/assets/icons/devices.svg"
import Lunch from "/assets/icons/lunch.svg"
import Coffee from "/assets/icons/coffee.svg"
import Plan from "/assets/icons/plan.svg"

const Resources = () => {


  const resources = [{

  }]

  return (
    <div>
      <table className='table-auto w-full'>
        <tbody>
          <tr style={{ borderBottom: "1px solid #f7f3f3", height: "50px" }}>
            <td className='w-9'><Devices></Devices></td>
            <td className='text-sm'>Seats (4)</td>
            <td className='text-xs text-success'>Active</td>
            <td></td>
          </tr>
          <tr style={{ borderBottom: "1px solid #f7f3f3", height: "50px" }}>
            <td className='w-9'><Plan></Plan></td>
            <td className='text-sm'>AC</td>
            <td className='text-xs text-danger'>Not working properly</td>
            <td className='text-xs text-primary'>Notify</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #f7f3f3", height: "50px" }}>
            <td className='w-9'><Lunch></Lunch></td>
            <td className='text-sm'>Computer</td>
            <td className='text-xs text-success'>Active</td>
            <td></td>
          </tr>
          <tr style={{ borderBottom: "1px solid #f7f3f3", height: "50px" }}>
            <td className='w-9'><Coffee></Coffee></td>
            <td className='text-sm'>Network / WiFi</td>
            <td className='text-xs text-success'>Active</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}
export default Resources;