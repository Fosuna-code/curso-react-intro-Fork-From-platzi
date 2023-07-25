import React from "react";
import { createPortal } from "react-dom";

function Modal({children}){
    return createPortal(
        children,document.body);
}
export {Modal};