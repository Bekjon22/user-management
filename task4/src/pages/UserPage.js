import {useEffect, useState} from "react";
import axios from "axios";
import DataGridDemo from "./UserPanel";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {API_PATH, USER_KEY} from "../component/Constants";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import dataGrid from '../component/dataGrid.css';
import {toast} from "react-toastify";
import {IconButton} from "@mui/material";


const UserPage = () => {
    const [user, setUser] = useState([])

    const [selectedIDS, setSelectedIDS] = useState([])
    const navigate = useNavigate()

    const getUserList = async () => {
        await axios.get('http://localhost:8082/api/users/get/all?id=' + USER_KEY)
            .then(res => {
                setUser(res.data.data)
            })
            .catch(err => {
                console.log(err)
                navigate('/')
                toast.dark("Your account blocked or deleted")
            })

        // try {
        //     const res =  await axios.get('http://localhost:8082/api/users')
        //     setUser(res.data.data)
        // }catch (err) {
        //     console.log(err)
        //     // navigate('/')
        //     toast.dark("Your account blocked or deleted")
        // }

    }

    useEffect(() => {
        (async () => {
            await getUserList()
        })()
    }, [])

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            editable: false,
        },
        {
            field: 'registrationTime',
            headerName: 'Registration Time',
            type: 'dateTime',
            width: 250,
            editable: false,
        },
        {
            field: 'lastLoginTime',
            headerName: 'Last Login Time',
            sortable: true,
            width: 250,

        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'boolean',
            width: 150,
            editable: false,
        },

    ];

    const handleDelete = async () => {

        if(!selectedIDS.length){
            toast.dark("Not selected any user!!!")
            return
        }

        try {

            await axios.delete(API_PATH + `/users/delete?currentId=`+ USER_KEY, {
                data: {
                   ids: selectedIDS
                }
            })

            let remainingUsers = {}

            selectedIDS.forEach(id => {
                user.forEach(u => {
                    if(id !== u.id){
                       remainingUsers = {
                           ...remainingUsers,
                           [u.id]: u
                       }
                    }
                })
            })


            setUser(Object.values(remainingUsers))

        }catch (error) {
            console.log(error.response)
            // navigate('/')
            // toast.dark("Your account blocked or deleted")
        }
    }

    const handleBlock = async () => {

        if(!selectedIDS.length){
            toast.dark("Not selected any user!!!")
            return
        }
            await axios.put(API_PATH + `/users/block?currentId=`+  USER_KEY, {ids: selectedIDS})
                .then(() => {

                    let remainingUsers = {}

                    selectedIDS.forEach(id => {
                        user.forEach(u => {
                            if(id === u.id){
                                remainingUsers = {
                                    ...remainingUsers,
                                    [u.id]: {...u, status: false}
                                }
                            }else {
                                if(!remainingUsers[u.id]){
                                    remainingUsers = {
                                        ...remainingUsers,
                                        [u.id]: {...u}
                                    }
                                }
                            }
                        })
                    })
                    setUser(Object.values(remainingUsers))

                }) .catch(err => {
                    console.log(err.response)
                    navigate('/')
                    toast.dark("Your account blocked or deleted")
                })

        }




            // setUser(Object.values(remainingUsers))




    const handleUnBlock = async () => {
        const currentId = 1

        if(!selectedIDS.length){
            toast.dark("Not selected any user!!!")
            return
        }

        try {
            await axios.put(API_PATH + `/users/unblock?currentId=`+USER_KEY, {ids: selectedIDS})
            let remainingUsers = {}

            selectedIDS.forEach(id => {
                user.forEach(u => {
                    if(id === u.id){
                        remainingUsers = {
                            ...remainingUsers,
                            [u.id]: {...u, status: true}
                        }
                    }else {
                        if(!remainingUsers[u.id]){
                            remainingUsers = {
                                ...remainingUsers,
                                [u.id]: {...u}
                            }
                        }
                    }
                })
            })


            setUser(Object.values(remainingUsers))

        }catch (error) {
            navigate('/')
            toast.dark("Your account blocked or deleted")

        }
    }


    return (
        <div className={'container mt-2 shadow-lg'}>

            <DataGridDemo
                rows={user}
                columns={columns}
                pageSize={10}
                setSelectedIDS={setSelectedIDS}
            />

            <div className={'d-flex mt-2 delete'}>
                <div className={"delete"}>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon/>
                    </IconButton>

                </div>
                <div className={"lock"}>
                    <IconButton onClick={handleUnBlock}>
                        <LockOpenIcon/>
                    </IconButton>
                </div>

                <div className={"block"}>
                    <button onClick={handleBlock} className={'btn btn-danger'}>
                        Block
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserPage;