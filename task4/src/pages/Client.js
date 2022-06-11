import React, {useEffect, useState} from 'react';
import axios from "axios";
// import {API_PATH, tokenHeader} from "../component/Constants";
// import {toast} from "react-toastify";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "reactstrap";
// import {AvField, AvForm} from "availity-reactstrap-validation";

const Client = () => {
    const [client, setClient] = useState([])
    // const [customFieldTypeEnums, setCustomFieldTypeEnums] = useState([])
    // const [clientCusField, setClientCusField] = useState([])
    // const [disable, setDisable] = useState(false)
    // const [disableCustField, setDisableCustField] = useState(false)
    // const [disableDropdown, setDisableDropdown] = useState(false)
    // const [deleteModal, setdeleteModal] = useState(false)
    // const [currentClient, setcurrentClient] = useState(undefined)
    // const [currentCustomField, setcurrentCustomField] = useState(undefined)


    const getCusFieldTypeEnums = () => {
        axios.get('http://localhost:8082/api/users/get/all').then(res => {
            console.log(res.data.data.content)
            setClient(res.data.data.content)
        })
    }
    //
    // const getClient = () => {
    //     axios.get(API_PATH + 'client',tokenHeader).then(res => {
    //         // console.log(res.data)
    //         setClient(res.data)
    //     })
    // }
    //
    // const getClientCusField = () => {
    //   axios.get(API_PATH + "client/cusFieldTableName",tokenHeader).then(res => {
    //       console.log(res.data.object)
    //       setClientCusField(res.data.object)
    //   })
    // }

    useEffect(() => {
        // getClient()
        getCusFieldTypeEnums()
        // getClientCusField()
    }, [])

    // const openModalCustomField = () => {
    //     setDisableCustField(!disableCustField)
    // }
    //
    // const openModalDropdown = () => {
    //   setDisableDropdown(!disableDropdown)
    // }
    //
    // const openModal = () => {
    //     setDisable(!disable)
    // }
    // const saveClient = (event,values) => {
    //     if (!currentClient) {
    //         axios.post(API_PATH + "client", values,tokenHeader).then(res => {
    //             toast.success(res.data.message)
    //             getClient()
    //
    //         })
    //     }else {
    //         axios.put(API_PATH+"client/"+currentClient.id,values,tokenHeader).then(res=>{
    //             getClient()
    //         })
    //         setcurrentClient(undefined)
    //     }
    //     openModal()
    // }
    //
    // const saveCustomField = (event, values) => {
    //     if (!currentCustomField) {
    //         axios.post(API_PATH + "client/addCustomField", values, tokenHeader).then(res => {
    //             toast.success(res.data.message)
    //             getClientCusField()
    //         })
    //
    //         openModalDropdown()
    //     }
    // }
    //
    // function deleteClient(value) {
    //     axios.delete(API_PATH + "client/"+value.id,tokenHeader).then(res => {
    //         getClient()
    //     })
    //     setcurrentClient(undefined)
    //     openDeleteModal()
    // }


    // function openDropdownModal(value) {
    //     setdeleteModal(!deleteModal)
    // }
    // function openDeleteModal() {
    //     setdeleteModal(!deleteModal)
    // }
    //
    // function deleteClientRoad(value) {
    //     openDeleteModal()
    //     setcurrentClient(value)
    // }
    // function editClientRoad(value) {
    //     setcurrentClient(value)
    //     openModal()
    // }
    //
    // console.log(customFieldTypeEnums)


    return (
        <div className={"container bg-white bg-opacity-50 shadow"}>
            {/*<button className={'btn btn-success '} style={{margin: '20px 0'}} onClick={openModal}>Qo'shish</button>*/}

            {/*<Modal isOpen={disable}>*/}
            {/*    <ModalHeader toggle={() => {*/}
            {/*        openModal()*/}
            {/*    }}>*/}
            {/*        Mijoz Qo'shish*/}
            {/*    </ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        <AvForm onValidSubmit={saveClient}>*/}
            {/*            /!* With AvField *!/*/}
            {/*            /!*<AvField type="checkbox" name="active" label="Active" value="false"/>*!/*/}
            {/*            /!* With AvGroup AvInput and AvFeedback to build your own *!/*/}
            {/*            /!*<AvField type="select" name="select" label="Option"*!/*/}
            {/*            /!*         helpMessage="Idk, this is an example. Deal with it!">*!/*/}
            {/*            /!*    <option>1</option>*!/*/}
            {/*            /!*    <option>2</option>*!/*/}
            {/*            /!*    <option>3</option>*!/*/}
            {/*            /!*    <option>4</option>*!/*/}
            {/*            /!*    <option>5</option>*!/*/}
            {/*            /!*</AvField>*!/*/}
            {/*            <AvField name="name" label="Nomi" required  value={currentClient ? currentClient.name : ""}/>*/}
            {/*            <AvField name="phoneNumber" label="Telefon Raqami" required value={currentClient ? currentClient.phoneNumber : ""}/>*/}
            {/*            <Button color="success">Save</Button>*/}
            {/*        </AvForm>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}
            {/*<Modal isOpen={deleteModal}>*/}
            {/*    <ModalHeader toggle={() => {*/}
            {/*        openDeleteModal()*/}
            {/*    }}>*/}
            {/*        O'chirishni tasdiqlaysizmi?*/}
            {/*    </ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        <Button onClick={() => deleteClient(currentClient)} >xa</Button>*/}
            {/*        <Button onClick={() => openDeleteModal()}>Yo'q</Button>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}


            {/*<Modal isOpen={disableCustField}>*/}
            {/*    <ModalHeader toggle={() => {*/}
            {/*        openModalCustomField()*/}
            {/*    }}>*/}
            {/*        Custom Field qo'shish*/}

            {/*    </ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        <AvForm onValidSubmit={()=>saveCustomField()}>*/}
            {/*            /!*{console.log(customFieldTypeEnums)}*!/*/}
            {/*            <AvField type="select" name="fieldType" label="Option"*/}
            {/*                     onChange={(e) => openModalDropdown(e.target.value)}*/}
            {/*                     helpMessage="Idk, this is an example. Deal with it!">*/}
            {/*                <option value="">Custom Field turini tanlang</option>*/}
            {/*                {customFieldTypeEnums.map((value => {*/}
            {/*                    return <option value={value}>{value}</option>*/}
            {/*                }))}*/}
            {/*            </AvField>*/}

            {/*        </AvForm>*/}
            {/*    </ModalBody>*/}

            {/*</Modal>*/}

            {/*<Modal isOpen={disableDropdown}>*/}
            {/*    <ModalHeader toggle={() => {*/}
            {/*        openModalCustomField()*/}
            {/*    }}>*/}
            {/*        Dropdown*/}
            {/*    </ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        <AvForm onValidSubmit={()=>saveCustomField()}>*/}
            {/*            {console.log(currentCustomField)}*/}
            {/*            <AvField name="nameUz" label="Nomi" required  value={currentCustomField ? currentCustomField.name : ""}/>*/}
            {/*            <AvField name="fieldType" label='Field Type' required value="DROPDOWN"></AvField>*/}
            {/*            <AvField name="optionalDropdown" label="Option" required value={currentCustomField ? currentClient.dropdownDto : ""}/>*/}

            {/*            <Button color="success">Save</Button>*/}

            {/*        </AvForm>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}

            {/*<div className="card-header fw-bold d-flex align-items-center justify-content-end">*/}
            {/*    <button className={'btn btn-success '} style={{margin: '20px 0', borderRadius: '10px'}}*/}
            {/*            onClick={openModalCustomField}>Add Custom Field</button>*/}
            {/*</div>*/}

            <Table
            >
                <thead className={'fw-bolder text-black'}>
                <tr>
                    <th>
                        #id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        registrationTime
                    </th>
                    <th>
                        lastLoginTime
                    </th>
                    <th>
                        status
                    </th>

                </tr>
                </thead>
                <tbody className={'fw-bold text-dark'}>
                {client.map((value, index) => {
                    console.log(value)
                    return <tr style={{cursor: 'pointer'}}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.registrationTime}</td>
                        <td>{value.lastLoginTime}</td>
                        <td>{value.status}</td>

                    </tr>
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default Client;