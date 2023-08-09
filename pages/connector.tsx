import React, { useState, useEffect, createContext } from "react";
import Layout from "../components/Layout";
import ChooseConnector from "../components/features/ConnectionManagement/ChooseConnector";
import ModalRoot from "../components/lib/modalPopup/components/ModalRoot";
import ModalService from "../components/lib/modalPopup/services/ModalService";
import Button from "../components/common/Button";
import { getConnectorList } from "./api/connectorAPI";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ConnectorList from "../components/features/ConnectionManagement/ConnectorList";
import SearchBar from "../components/common/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import ConnectorDetails from "../components/features/ConnectionManagement/ConnectionDetails/ConnectorDetails";
import axios from "axios";
import { config } from '../services/http-common';

export const ConnectorContext: any = createContext({
  setopenConnectorDetailTab: () => { },
  connectorDetailId: {},
  setConnectorDetailId: () => { }
});

const Connector = () => {
  const [connectorList, setConnectorList] = useState([]);
  const [openConnectorDetailTab, setopenConnectorDetailTab] = useState(false);
  const [connectorDetailId, setConnectorDetailId] = useState({});

  function onSearch(searchName:any) {
    let searchReqd=searchName!=null && searchName.length>0?true:false;
    let url = searchReqd?config.connectionManagement.baseURL + config.connectionManagement.GetConnectorByName:config.connectionManagement.baseURL + config.connectionManagement.GetAllConnectors;
    let reqData=searchReqd?{ params: { name: searchName }}:{};
    const temp: any = [{}];
    axios.get(url, reqData).then(res => {
      if(res.data!=null && res.data.length>0)
        setConnectorList(res.data);
      else
        setConnectorList(temp);
    });
 }

 const fetchConnectorList=()=>{
  let url = config.connectionManagement.baseURL + config.connectionManagement.GetAllConnectors;
    const temp: any = getConnectorList();
    axios.get(url).then(res => {
      setConnectorList(res.data);
    })

    setConnectorList(temp);
 }

  useEffect(() => {
    fetchConnectorList();
  }, []);

 

  const addModal = () => {
    ModalService.open(ChooseConnector,{fetchConnectorList});
  };

  return (
    <>
      <Layout>
        <ConnectorContext.Provider
          value={{ setopenConnectorDetailTab, connectorDetailId: connectorDetailId, setConnectorDetailId }}
        >
          <h2 className="text-xl font-bold">Connector Management</h2>
          <Breadcrumbs currentPage={"Connector Management"} />
          {connectorList.length === 0 ? (
            <div className="flex justify-center items-center h-100">
              <Button onClick={addModal}>Add a Connector</Button>
            </div>
          ) : (
            <div>
              {openConnectorDetailTab && <ConnectorDetails />}
              <div className="flex flex-column py-4 ">

                <div className="flex w-full">
                  <SearchBar onSearch = {onSearch}/>
                  <button
                    onClick={addModal}
                    className={
                      "flex items-center justify-center btn text-primary border border-primary"
                    }
                  >
                    <div className="bg-primary text-white rounded-full p-2 h-5 w-5 mr-3 flex justify-center items-center ">
                      <AddIcon fontSize="small" />
                    </div>
                    Add a Connector
                  </button>
                </div>
                <div className="py-4 overflow-auto" style={{ maxHeight: '68vh' }}>
                  {connectorList.map((data, index) => (
                    <ConnectorList key={index} data={data} fetchConnectorList={fetchConnectorList}/>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ConnectorContext.Provider>
      </Layout>
      <ModalRoot />
    </>
  );
};

export default Connector;
