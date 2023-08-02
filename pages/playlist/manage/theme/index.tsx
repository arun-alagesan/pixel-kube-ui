import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridValueGetterParams,
  gridClasses
} from "@mui/x-data-grid";
import Layout from "../../../../components/Layout";
import Button from "../../../../components/common/Button";
import Breadcrumbs from "../../../../components/common/Breadcrumbs";
import { playlistService } from "../../../../services/playlist.service";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Stack } from "@mui/material";
import { CopyAll, Delete, Edit, VolumeDown, VolumeUp } from "@mui/icons-material";
import { themeService } from "../../../../services/theme.service";
let breadcrumbPaths = [{ name: "Home", path: "/" },{ name: "Content Management", path: "/playlist" }];


const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Thumbnail",
    width: 140,
    headerClassName: "hideRightSeparator",
    renderCell: (params: GridCellParams) => (
      <img
        className="w-[100px] aspect-video rounded-md"
        src={params.row.image}
      ></img>
    ),
  },

  { field: "name", headerName: "Media Name", minWidth: 300, flex: 1,    headerClassName: "hideRightSeparator",
},
  {
    field: "type",
    headerName: "Type",
    minWidth: 300,
    flex: 1,
    sortable: true,
    headerClassName: "hideRightSeparator",
  },
  {
    field: "volume",
    headerName: "",
    minWidth: 300,
    flex: 1,
    headerClassName: "hideRightSeparator",
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    renderCell: (params: GridCellParams) =>
         <Box sx={{ width: 200, display: "flex", alignItems : 'center', gap: "10px", justifyContent : 'center' }}>
            <Edit sx={{ stroke: "#ffffff", strokeWidth: 1 }} type={"button"}/>
            <CopyAll sx={{ stroke: "#ffffff", strokeWidth: 1 }} type={"button"}/>
            <Delete sx={{ stroke: "#ffffff", strokeWidth: 1 }} type={"button"}/>
        </Box>
  },
];

const generateRows = (params: any) => {
  return params.map((data) => {
    return {
      image: data.image,
      type: data.type,
      id: data.id,
      name: data.name,
    };
  });
};
export default function DataTable() {
  const [theme, setTheme] = React.useState<any>([]);
  React.useEffect(() => {
    setTheme(themeService.getAllThemes());
  }, []);
 
  const rows = generateRows(theme);
  return (
    <Layout>
      <div className="flex justify-between items-center m-6">
        <div>
          <h2 className="text-xl font-bold">Theme Management</h2>
          <Breadcrumbs
            currentPage={"Playlist Management"}
            routes={breadcrumbPaths}
          />
        </div>
        <Button>Add Theme</Button>
      </div>
      <DataGrid
        sx={{
            [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
              outline: 'none',
            },
            [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
              {
                outline: 'none',
              },
              '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
          }}
        rows={rows}
        columns={columns}
        className={"m-6"}
        rowHeight={100}
        disableRowSelectionOnClick
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Layout>
  );
}
