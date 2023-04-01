import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useContext } from 'react';
//import { PlayerContext } from '../../../../pages/player';
import { userListColumn, userListData } from './gridMockData';

export default function DataTable() {
  // const contextData: any = useContext(PlayerContext);
  // const doSometing = () => {
  //   contextData.setOpenPlayerDetailTab(true);
  // }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userListData}
        columns={userListColumn}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}