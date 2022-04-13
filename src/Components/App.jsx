import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Note from "../Components/Note";
import Compose from "./Compose";

function App(){

    const [notes, setNotes] = React.useState([]);

    function setupNotes(content){

        setNotes(prevValue =>{
            return([
                ...prevValue, content
            ]);
        });
    }

    function removeNotes(id){
        setNotes(prevValue => {
            return( prevValue.filter((noteItem, index) => {
                return index !== id;
            }));
        });
    }
    

    return(
    <div>
        <Header />
        <Compose
        addNotes = {setupNotes}
         />
        {notes.map((x, index) => {
            return (
                <Note
                key = {index}
                id_no = {index}
                heading = {x.title}
                body = {x.content}
                delNotes = {removeNotes}
                />
            );
        })}
        <Footer />
    </div>
    )
}

export default App;