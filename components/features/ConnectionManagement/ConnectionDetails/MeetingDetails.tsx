import moment from 'moment';
import React from 'react'
import Meeting from '../../../../models/connector/meeting';

const MeetingDetails = (props: any) => {
  return (
    <div className='flex justify-between items-center border-top p-4'>
      {/* {JSON.stringify(meetingdata)} */}
      <div>
        <div>{moment(props.startTime).utc().format('hh:mm')} - {moment(props.endTime).utc().format('hh:mm')}</div>
        <div> {props.description}</div>
        <div className='opacity-30 text-xs'> John Walker, Fardeen, Diya Stakes, etc...</div>
      </div>
      <div>
        <div> ...</div>
      </div>

    </div>
  )
}

export default MeetingDetails