import styles from './AddRoom.module.css';

const RoomLeftPanel = () => {
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
                <div className="col-12">
                    <img src="/assets/images/room.png" alt="room" style={{ width: '100%' }}></img>
                </div>
            </div>
        </div>
    );
}

export default RoomLeftPanel;