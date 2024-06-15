import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Modal from './Modal';

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
                textAlign: "center",
                display: "block",
            }}>
                <FaUserCircle className='cursor-pointer' onClick = {handleOpen} size={50}/>
                
                <Modal isOpen={open} onClose={handleClose}>
                    <>
                        <h1>Im a modal</h1>
                        <h3>Write anything in me</h3>
                    </>
                </Modal>
        </div>
    );
}


export default UserProfile