import React from "react";
import { RxCross2 } from "react-icons/rx";
 
const Modal = ({ isOpen, onClose, children ,boxHeight=500, boxWidth=500 }) => {
    if (!isOpen) return null;
 
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: boxHeight,
                    width: boxWidth,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    color:"black",
                }}
            >
                <div className='flex justify-end'>
            <RxCross2  className='hover:text-red-500 cursor-pointer' onClick={onClose} />
        </div>
                {children}
            </div>
        </div>
    );
};
 
export default Modal;