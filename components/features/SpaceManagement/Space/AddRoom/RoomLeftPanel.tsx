import { AreaSelector, IArea } from '@bmunozg/react-image-area';
import { useState } from 'react';
import styles from './AddRoom.module.css';


const RoomLeftPanel = (props: any) => {

    // const [floorDetails, setFloorDetails] = useState<any>(props.floorDetails)


    const onChangeHandler = (area: IArea[]) => {
        props.onAreaChange(area);
    }
    return (

        <div className={" col-12 col-md-8 " + styles.left_panel}>
            <div className="row">
                <div className="col-12 text-left">
                    <h6 className="fw-bold mb-0">
                        Add Room
                    </h6>
                    <p className="text-black-50 small">
                        Drag to select space
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 myclass">
                    {/* <img src={floorDetails?.floorData?.floorPlan} alt="room" style={{ width: '100%' }}></img> */}

                    <AreaSelector
                        unit='percentage'
                        areas={props.areas}
                        onChange={onChangeHandler}
                        wrapperStyle={{
                            border: '2px solid black'
                        }}
                        globalAreaStyle={{
                            border: '1.5px dashed green',
                            backgroundColor: 'lightblue',
                            opacity: '0.5'
                        }}
                    >
                        <img src={props?.floorDetails?.floorData?.floorPlan} alt='my image' style={{ width: '100%' }} />
                    </AreaSelector>
                </div>
            </div>
        </div>
    );
}

export default RoomLeftPanel;