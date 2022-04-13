import React from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@mui/icons-material";

function Compose(props){


    const [contents, setContents] = React.useState({
        title : "",
        content : ""
    });

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(event){
        const {name, value} = event.target;
        setContents(prevValue =>{
            return({
                ...prevValue, [name] : value
            });
        });

    }

    return(
        <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={contents.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={contents.content}/>
        
        <button onClick={() => {
            props.addNotes(contents);
        }}>
            +
        </button>

      </form>
    </div>
     
    )
}

export default Compose;