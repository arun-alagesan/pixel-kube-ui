import styles from './floorviewer.module.css'
import floor from '../../../assets/images/floor.png'
import styled from '@emotion/styled'
import { string } from 'yup';
const FloorViewer = (props) => {

    const DotButton = styled.div<{ isAvailable: boolean, left: string, top: string } >`
    background: ${(c) => c.isAvailable ? "green" : "red"};
    border-radius: 50%;
    height: 15px;
    position: absolute;
    width: 15px;
    top: ${(t) => t.top};
    left: ${(l) => l.left};
    &:hover{
        background: red;
    }
    `;
    return (
        <div>
            <div className={styles.con} style={{ height: "524px", width: "569%", backgroundImage: `url(${props.imageSrc})`, backgroundSize: '100%', backgroundRepeat: "no-repeat" }} >
                {                  
                   props?.floorSlots?.map((item, index) => {
                        return <DotButton onClick={() => props.onSlotClick(item.id)} isAvailable={item.isAvailable} key={index} left={item.left} top={item.top} ></DotButton>
                    })
                }
            </div>
        </div>
    )

}
export default FloorViewer;