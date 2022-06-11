import * as React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import dataGrid from '../component/dataGrid.css'


// const columns: GridColDef[] = [
//     {field: 'id', headerName: 'ID', width: 90},
//     {
//         field: 'name',
//         headerName: ' name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'email',
//         headerName: 'email',
//         width: 150,
//         editable: true,
//
//     },
//     {
//         field: 'registrationTime',
//         headerName: 'registrationTime',
//         type: 'number',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'lastLoginTime',
//         headerName: 'lastLoginTime',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 150,
//         valueGetter: (params: GridValueGetterParams) =>
//             `${params.row.name || ''} ${params.row.email || ''}`,
//     },
//     {
//         field: 'status',
//         headerName: 'status',
//         type: 'boolean',
//         width: 150,
//         editable: true,
//     },
//
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataGridDemo(
    {
        rows,
        columns,
        pageSize,
        setSelectedIDS
    }) {
    return (
        <div style={{height: 650, width: '100%', textAlign: 'center'}}>
            <DataGrid
                className={"dataGrid"}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[10]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                    setSelectedIDS(ids)
                }


                }
            />
        </div>

    );
}

