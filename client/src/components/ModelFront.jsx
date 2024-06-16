import React from "react";
import { RxCross2 } from "react-icons/rx";
import InputBox from "./InputBox";
 
const ModelFront = ({ isOpen, onClose, children ,boxHeight=500, boxWidth=500, className, ...props }) => {
    if (!isOpen) return null;
 
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <div
                style={{
                    background:"rgba(128,128,128,0.4)",
                    height: boxHeight,
                    width: boxWidth,
                    margin: "auto",
                    padding: "2%",
                    border: "1px solid #000",
                    borderRadius: "10px",
                    boxShadow: "10px solid black",
                    // color:"white",
                    
                }}
                // className={`h-[`+boxHeight+`] w-[`+boxWidth+`] m-auto p-1 border-2 border-solid border-[#000] rounded-[10px] text-black shadow-['2px'] shadow-black ${className}`}
        
            >
                <div className='flex justify-end'>
            <RxCross2  className='text-black hover:text-red-500 cursor-pointer' onClick={onClose} />
        </div>
                {children}
            </div>
        </div>
    );
};
 
export default ModelFront;