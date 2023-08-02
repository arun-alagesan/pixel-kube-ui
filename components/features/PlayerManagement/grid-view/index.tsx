import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import DeleteAlert from "../../../../components/common/deleteAlert";
import ModalService from "../../../lib/modalPopup/services/ModalService";
import { PlayerContext } from '../../../../pages/player';
//import { playerListColumn } from './gridMockData';
import PlayerManagementService from "../../../../services/player.service";
import PlayerList from "../../../../models/player/PlayerList";
import Router from 'next/router';
import AddUpdatePlayer from '../grid-view/AddUpdatePlayer';
import CreateBuilding from "../../SpaceManagement/Building/CreateBuilding";

const PlayerData = () => {

  const playerListColumn = [
    { field: 'status', headerName: '', width: 130 , hide: true },
    { field: 'serialNumber', headerName: 'Serial No.', width: 130 },
    { field: 'deviceName', headerName: 'Device Name', width: 130 },
    { field: 'ipAddress', headerName: 'IP Address', width: 90 },
    { field: 'department', headerName: 'Department', width: 160 },
    { field: 'locationName', headerName: 'Location', width: 160 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 160 },
    {
      field: "deleteButton",
      headerName: "Actions",
      description: "Actions column.",
      sortable: false,
      width: 160,
      renderCell: (params: any) => {
        return (
          <div className="flex">
            <Button>
              <EditIcon></EditIcon>
            </Button>
            <Button onClick={(e) => deletePlayer(e, params.row)} color="error" >
              <DeleteIcon></DeleteIcon>
            </Button>
          </div>
        );
      }
    }
  ];

  const [playerListData, setPlayer] = useState<PlayerList[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
      fetchMyApi();
      const urlParams = new URLSearchParams(window.location.search).get('openModal');;
      if (urlParams == "true")
          openModel(AddUpdatePlayer, { "submittedCallback": fetchMyApi })
  }, []);

  async function fetchMyApi() {
      setLoader(true);
      var response = await PlayerManagementService.getPlayerList();
      console.log("PlayerManagementService getPlayerList", response);
      if (response.status == true) {
        setPlayer(response.data);
      }
      setLoader(false);
  }

  const contextData: any = useContext(PlayerContext);
  const doSometing = () => {
    contextData.setOpenPlayerDetailTab(true);
  }

  const openAddPlayerModel = () => {
    contextData.setOpenAddPlayerTab(true);
  }

  const openModel = (component: any, props?: any) => {
    console.log("open clicked");
    ModalService.open(component, props);
  };

  async function deletePlayer (e :any, row: PlayerList) {
    e.stopPropagation();
    debugger;
    // openModel(DeleteAlert, {
    //     "onDelete": async () => {
    //         setLoader(true);
    //         var result = await PlayerManagementService.deletePlayer(row.serialNumber);
    //         console.log("delete result" + result);
    //         if (result.status == true) { 
    //             await fetchMyApi();
    //         }
    //         setLoader(false);
    //     }
    // });
    setLoader(true);
    var result = await PlayerManagementService.deletePlayer(row.serialNumber);
    console.log("delete result" + result);
    if (result.status == true) {
        await fetchMyApi();
    }
    setLoader(false);
  }

  return (
    <>
    {
      loader == true ?
      <div className="text-center">Loading Data...</div> :
      <div>
        {
            <div className='col-12'>
                    <div className="row mb-3">
                        <div className="col-12 text-right">
                            <div className="mt-5">
                                <Button variant="contained" type="submit" onClick={() => openAddPlayerModel() }>Add a Device</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={playerListData}
                            columns={playerListColumn}
                            initialState={{
                              pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                              },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            onRowClick={doSometing}
                            getRowId={(row) => row.serialNumber}
                          />
                        </div>
                    </div>
                </div>
        }
      </div>
    }
    </>
  );
}


export default PlayerData;