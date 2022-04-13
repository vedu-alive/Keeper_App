import React from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@material-ui/core";
import { DeleteForever } from "@mui/icons-material";

function Note(props){
    return (
    <div className="note">
        <h1>{props.heading}</h1>
        <p>{props.body}</p>

        <IconButton aria-label="delete">
            <DeleteForever onClick={()=>{
            props.delNotes(props.id_no);
        }} />
        </IconButton>
    </div>
    );
};

export default Note;