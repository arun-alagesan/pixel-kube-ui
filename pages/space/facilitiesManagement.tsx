import { Column, ColumnEditorOptions } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Layout from "../../components/Layout";
import AddIcon from "@mui/icons-material/Add";


import SearchIcon from '@mui/icons-material/Search';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useRef, useState } from "react";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Menu } from 'primereact/menu';
import Facility, { Resource } from "../../models/facility";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from "@mui/material/Button";
import { Dropdown } from 'primereact/dropdown';
// import TextField from "@mui/material/TextField";



let renderCount = 0;
const FacilitiesManagement = () => {
    console.log("renderCount", renderCount++);

    const [data, setData] = useState<Facility[]>([
        {
            "id": 1,
            "facility": "IT Infrastructure",
            "email": "it@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "it@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true,
            "resources": [
                {
                    id: 1,
                    resource: "Projector",
                    isActive: true,
                    type: "Toggle",
                    icon: "test"
                },
                {
                    id: 2,
                    resource: "Wifi",
                    isActive: true,
                    type: "Toggle",
                    icon: "test"
                },
                {
                    id: 3,
                    resource: "Computer",
                    isActive: true,
                    type: "Toggle",
                    icon: "test"
                }
            ]
        },
        {
            "id": 2,
            "facility": "Front Desk",
            "email": "fd@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "fd@esc.com",
            "notifyFacility": false,
            "notifyOrganizer": true
        },
        {
            "id": 3,
            "facility": "Catering",
            "email": "icat@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "cat@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true
        }
    ] as Facility[]);

    const citySelectItems = [
        { label: 'Toggle', value: 'Toggle' },
        { label: 'Count', value: 'Count' },
        { label: 'Bookable', value: 'Bookable' },

    ];

    const [editingRows, setEditingRows] = useState({});
    const [rowIndex, setRowIndex] = useState(0);
    useEffect(() => {

    }, [rowIndex]);


    let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'Space Management', 'path': '/space' }];

    const setActiveRowIndex = (index: number) => {
        console.log("edit Index ", index);
        let _editingRows = { ...editingRows, ...{ [`${data[index].id}`]: true } };
        console.log("_editingRows", _editingRows);
        setEditingRows(_editingRows);
    }

    const onRowEditChange = (e: any) => {
        setEditingRows(e.data);
    }

    const onRowEditComplete2 = (e: any) => {
        let _data = [...data];
        let { newData, index } = e;

        _data[index] = newData;

        setData(_data);
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    //
    const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        console.log("button click ", index);
        setRowIndex(index);
        setAnchorEl(event.currentTarget);
    };

    const handleEdit = () => {
        console.log("edit row index", rowIndex);
        setActiveRowIndex(rowIndex);
        setAnchorEl(null);
    };

    const handleDelete = () => {
        setAnchorEl(null);
    };

    const handleClone = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const rowExpansionTemplate = (data: Facility) => {
        return (
            <div className="row p-5">
                <div className="col-12 ">
                    <div className="table-responsive ">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Resources</th>
                                    <th>Resources Type</th>
                                    <th>Enable</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.resources?.map(x => {
                                    return (
                                        <tr>
                                            <td>{x.resource}</td>
                                            <td>{x.type}</td>
                                            <td>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" checked={x.isActive} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <form >
                        <div className="row align-items-center ">
                            <div className="col-12 col-md-3">
                                {/* <TextField label="Add Custom" fullWidth variant="outlined" size="small" style={{ padding: "1.2rem 0.8rem" }} /> */}
                                <span className="p-float-label">
                                    <InputText type="text" className="p-inputtext-sm block" />
                                    <label>Add Custom</label>
                                </span>
                            </div>
                            <div className="col-12 col-md-3">
                                <span className="p-float-label">
                                    {/* <InputText type="text" className="p-inputtext-sm block" /> */}
                                    <Dropdown options={citySelectItems} placeholder="Select Type" />
                                    <label>Type</label>
                                </span>
                                {/* <TextField label="Type" variant="outlined" className="pk-input" /> */}
                            </div>
                            <div className="col-12 col-md-3">
                                <Button variant="contained" type="button" size="small" >Choose icon</Button>
                            </div>
                            <div className="col-12 col-md-3" >
                                <Button variant="contained" type="button" size="small">
                                    <ControlPointIcon></ControlPointIcon>
                                    <span className="ms-2">Add Custom </span> </Button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        );
    }
    const allowExpansion = (rowData: any) => {
        //return rowData.orders.length > 0;
        console.log(rowData);
        return true;
    };

    let items = [
        {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: (d: any) => {
                console.log("d in ", d.item);
            }
        },
        { label: 'Clone', icon: 'pi pi-clone' },
        { label: 'Delete', icon: 'pi pi-trash' }
    ];

    const [expandedRows, setExpandedRows] = useState<any>(null);
    const menu = useRef<Menu>(null);
    return (
        <Layout>
            <h2 className="text-xl font-bold">Facilities Management</h2>
            <Breadcrumbs currentPage={"Facilities Management"} routes={breadcrumbPaths} />

            <div className="flex w-full mt-3 mb-5">
                <div className='flex justify-between w-2/5 border rounded mr-8 items-center'>
                    <input className='w-full mx-2 focus:outline-none' placeholder="Search" />
                    <Button>
                        <SearchIcon />
                    </Button>
                </div>
                <button className={"flex items-center justify-center btn text-primary border border-primary"}>
                    <div className="bg-primary text-white rounded-full p-2 h-5 w-5 mr-3 flex justify-center items-center ">
                        <AddIcon fontSize="small" />
                    </div>
                    Add Facility
                </button>
            </div>
            <Menu model={items} popup ref={menu} />
            {/* <Button variant="contained" type="button" size="small" onClick={(event) => { console.log(event); menu.current?.toggle(event); }} >
                button
            </Button> */}

            {/* <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" >inovke </Button> */}


            <div className='col-12'>
                <DataTable value={data} editMode="row" dataKey="id" responsiveLayout="scroll" size="small" editingRows={editingRows}
                    onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2}
                    rowExpansionTemplate={rowExpansionTemplate}
                    expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                >

                    <Column field="facility" header="Facilities Group" editor={(options) => textEditor(options)} ></Column>
                    <Column field="email" header="Email" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationPeriod" header="Escalation Period" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationEmail" header="Escalation Email" editor={(options) => textEditor(options)}></Column>
                    <Column field="notifyFacility" header="Notify Facilities" body={(data) => switchBox(data.notifyFacility)} editor={(options) => switchEditor(options)} ></Column>
                    <Column field="notifyOrganizer" header="Notify Organizer" body={(data) => switchBox(data.notifyOrganizer)} editor={(options) => switchEditor(options)} ></Column>
                    <Column bodyStyle={{ textAlign: 'center' }} body={action}></Column>
                    <Column expander={allowExpansion} style={{ width: '3em' }} />
                    {/* <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column> */}
                </DataTable>
            </div>
            {/* <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleClone}>Clone</MenuItem>
            </Menu> */}
        </Layout>
    );



    function action(data: any, props: any) {
        //console.log("properties of action ", data);

        return (
            // <button onClick={() => setActiveRowIndex(props.rowIndex)} >
            <button
                // onClick={(e) => handleClick(e, props.rowIndex)}
                onClick={(event) => menu.current?.toggle(event)}
            >
                <MoreVertIcon></MoreVertIcon>
            </button>
        );
    }

    function viewMoreButton(data: any, props: any) {
        //console.log("properties of action ", data);

        return (
            // <button onClick={() => setActiveRowIndex(props.rowIndex)} >
            <button onClick={(e) => handleClick(e, props.rowIndex)} >
                <MoreVertIcon></MoreVertIcon>
            </button>
        );
    }



}



const footer = (
    <button className='btn text-primary small p-0 border-0 ' style={{ 'fontSize': '15px' }} ><i className='pi pi-plus-circle' style={{ 'fontSize': '14px' }}></i> Add More</button>
);
function textEditor(options: ColumnEditorOptions) {
    //console.log("option", options);
    return (
        <span className="p-float-label">
            <InputText type="text" className="p-inputtext-sm block" value={options.value} onChange={(e) => options.editorCallback!(e.target.value)} />
            <label>{options.column.props.header?.toString()}</label>
        </span>);
}

function switchBox(value: boolean) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" disabled checked={value} />
        </div>
    );
}

function switchEditor(options: ColumnEditorOptions) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" checked={options.value} onChange={(e) => options.editorCallback!(e.target.value)} />
        </div>
    );
    // return <InputSwitch checked={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
}

export default FacilitiesManagement;