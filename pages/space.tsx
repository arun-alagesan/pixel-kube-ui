import React from 'react';
import TestModal from '../components/features/SpaceManagement/addSpace';
import Layout from '../components/Layout';
import ModalRoot from '../components/lib/modalPopup/components/ModalRoot';
import ModalService from '../components/lib/modalPopup/services/ModalService';

const Space = () => {

    const addModal = () => {
        ModalService.open(TestModal);
      };
      
    return (
        <Layout>
            <h2 className='header2'>Space Management</h2>
            <div>
                <ModalRoot />
                <button onClick={ addModal } className="btn btn-primary m-4">Open modal</button>
            </div>
        </Layout>
    )
}

export default Space;