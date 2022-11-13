import React from 'react';
import Layout from '../components/Layout';
import AddConnection from '../components/features/ConnectionManagement/addConnection';
import ModalRoot from '../components/lib/modalPopup/components/ModalRoot';
import ModalService from '../components/lib/modalPopup/services/ModalService';


const Connector = () => {

    
    const addModal = () => {
        ModalService.open(AddConnection);
      };

    return (
        <Layout>
            <h2 className='text-xl font-bold '>Connector Management</h2>
            <div className='flex justify-center items-center h-100'>
                <ModalRoot />
                <button onClick={ addModal } className="btn btn-primary m-4">Add a Connector</button>
            </div>
        </Layout>
    )
}

export default Connector;