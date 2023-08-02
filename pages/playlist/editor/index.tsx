import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridValueGetterParams,
  gridClasses
} from "@mui/x-data-grid";
import Layout from "../../../components/Layout";
import Button from "../../../components/common/Button";
import Breadcrumbs from "../../../components/common/Breadcrumbs";
import { playlistService } from "../../../services/playlist.service";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Stack } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
let breadcrumbPaths = [{ name: "Home", path: "/" }];


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

  { field: "mediaName", headerName: "Media Name", minWidth: 300, flex: 1,     headerClassName: "hideRightSeparator",
},
  {
    field: "lastName",
    headerName: "Duration",
    minWidth: 300,
    flex: 1,
    sortable: false,
    headerClassName: "hideRightSeparator",
    renderCell: (params: GridCellParams,) => {

      return params.row.type === "image" ? (
        <span>{params.row.duration.full}</span>
      ) : (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={params.row.duration.part ? "part" : "full"}
          >
            <FormControlLabel value="full" control={<Radio />} label={`Play to End ${params.row.duration.full}`} />
            <FormControlLabel value="part" control={<Radio />} label="Play Duration" />

          </RadioGroup>
        </FormControl>
      );
    },
  },
  {
    field: "volume",
    headerName: "Volume",
    minWidth: 300,
    flex: 1,
    headerClassName: "hideRightSeparator",
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    renderCell: (params: GridCellParams) =>
      params.row.type !== "image" ? (
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={40} />
            <VolumeUp />
          </Stack>
        </Box>
      ) : (
        <></>
      ),
  },
];

const generateRows = (params: any) => {
  return params.map((data) => {
    return {
      image: data.image,
      type: data.type,
      id: data.id,
      mediaName: data.mediaName,
      duration: data.duration,
    };
  });
};
export default function DataTable() {
  const [playlist, setPlaylist] = React.useState<any>([]);
  React.useEffect(() => {
    setPlaylist(playlistService.getAllPlaylist());
  }, []);
 
  const rows = generateRows(playlist);
  return (
    <Layout>
      <div className="flex justify-between items-center m-6">
        <div>
          <h2 className="text-xl font-bold">Playlist Management</h2>
          <Breadcrumbs
            currentPage={"Playlist Management"}
            routes={breadcrumbPaths}
          />
        </div>
        <Button>Add Playlist</Button>
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
