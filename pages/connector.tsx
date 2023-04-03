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
import { config } from '../../services/http-common';

export const ConnectorContext: any = createContext({
  setopenConnectorDetailTab: () => { },
  connectorDetailId: {},
  setConnectorDetailId: () => { }
});

const Connector = () => {
  const [connectorList, setConnectorList] = useState([]);
  const [openConnectorDetailTab, setopenConnectorDetailTab] = useState(false);
  const [connectorDetailId, setConnectorDetailId] = useState({});

  useEffect(() => {
    let url = config.connectionManagement.baseURL+config.connectionManagement.GetAllConnectors;
    const temp: any = getConnectorList();
    axios.get(url).then(res => {
      setConnectorList(res.data);
    })

    //setConnectorList(temp);
  }, []);

  const addModal = () => {
    ModalService.open(ChooseConnector);
  };

  return (
    <Layout>
      <ConnectorContext.Provider
        value={{ setopenConnectorDetailTab, connectorDetailId: connectorDetailId, setConnectorDetailId }}
      >
        <h2 className="text-xl font-bold">Connector Management</h2>
        <Breadcrumbs currentPage={"Connector Management"} />
        {connectorList.length === 0 ? (
          <div className="flex justify-center items-center h-100">
            <ModalRoot />
            <Button onClick={addModal}>Add a Connector</Button>
          </div>
        ) : (
          <div>
            {openConnectorDetailTab && <ConnectorDetails />}
            <div className="flex flex-column py-4 ">
              <ModalRoot />
              <div className="flex w-full">
                <SearchBar />
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
                  <ConnectorList key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        )}
      </ConnectorContext.Provider>
    </Layout>
  );
};

export default Connector;
