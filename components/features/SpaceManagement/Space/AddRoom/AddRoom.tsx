import RoomLeftPanel from './RoomLeftPanel';
import RoomRightPanel from './RoomRightPanel';

type props = { close: any };
const AddRoom = (props: props) => {

    return (
        <div className="col-10 col-md-12 col-lg-10 col-xl-8">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-10 card">
                    <div className="card-body p-0">
                        <div className="row">
                            <RoomLeftPanel></RoomLeftPanel>
                            <RoomRightPanel close={props.close}></RoomRightPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddRoom;