import CloseIcon from '@mui/icons-material/Close';
import styles from './AddRoom.module.css';

const RoomRightPanel = (props: any) => {
    return (
        <div className={"col-12 col-md-4 " + styles.right_panel} >
            <div className="row">
                <div className="col-12 p-3  ">
                    <div className="float-end mt-2 " onClick={props.close}>
                        <CloseIcon style={{ color: 'grey' }}></CloseIcon>
                    </div>
                </div>
                <div className={"col-12 " + styles.right_panel_content}>
                    <div className='fw-bold'>X-Minds Solution</div>
                    <div className='small text-black-50'>2nd Floor, Boardwater Park</div>
                </div>

            </div>

        </div>
    );
}

export default RoomRightPanel;