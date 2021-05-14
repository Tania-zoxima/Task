import React from "react";
import ReactDOM from "react-dom";
import './Progressbar.css'
import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function Conditions({open,onClose,level}) {
  if (!open) return null;
  else if(level<100){
  return ReactDOM.createPortal(
    <div className="outermostDiv">
      <Progress type="circle" percent={level} />
    </div>,
    document.getElementById("portal")
  )}
  else if(level=100){
    return ReactDOM.createPortal(
      <div className="outermostDiv">
      </div>,
      document.getElementById("portal")
    );}
  
}
