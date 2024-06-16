import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Modal from './Modal';
import Login from './Login';
import Register from './Register';

function UserProfile() {
    const [open , setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
 
    return (
        <div
            style={{
                display: "block",
            }}>
                <FaUserCircle className='cursor-pointer ' color='grey' onClick = {handleOpen} size={50}/>
                
                <Modal isOpen={open} onClose={handleClose} boxHeight="70vh" boxWidth="40vw" >
                    <>
                       <Login />
                    </>
                </Modal>
        </div>
    );
}


export default UserProfile