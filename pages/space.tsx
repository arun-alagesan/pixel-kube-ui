import React from 'react';
import BlockMenu from '../components/BlockMenu';
import TestModal from '../components/features/SpaceManagement/addSpace';
import CreateOrganization from '../components/features/SpaceManagement/Organization/CreateOrganization';
import CreateSpace from '../components/features/SpaceManagement/Space/CreateSpace';
import Layout from '../components/Layout';
import ModalRoot from '../components/lib/modalPopup/components/ModalRoot';
import ModalService from '../components/lib/modalPopup/services/ModalService';

import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HandymanIcon from '@mui/icons-material/Handyman';
import Breadcrumbs from "../components/common/Breadcrumbs";

import Router from 'next/router'

const Space = () => {


    const openModel = (component: any) => {
        ModalService.open(component);
    };

    return (
        <Layout>
            <h2 className="text-xl font-bold">Space Management</h2>
            <Breadcrumbs currentPage={"Space Management"} />

            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-3">
                    <BlockMenu heading="Organization" subHeading="Manage Organization(s)" icon={AccountTreeIcon} onClick={() => openModel(CreateOrganization)} />
                </div>
                <div className="col-12 col-md-3">
                    <BlockMenu heading="Buildings" subHeading="Manage Building(s)" icon={ApartmentIcon} />
                </div>
                <div className="col-12 col-md-3">
                    <BlockMenu heading="Spaces" subHeading="Manage Space(s)" icon={MeetingRoomIcon} onClick={() => openModel(CreateSpace)} />
                </div>
                <div className="col-12 col-md-3">
                    <BlockMenu heading="Facilities" subHeading="Manage Facilities" icon={HandymanIcon} onClick={() => Router.push('/space/facilitiesManagement')} />
                </div>
            </div>

            <ModalRoot />
        </Layout>
    )
}

export default Space;