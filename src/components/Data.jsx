import React,{useState} from 'react';
import Button from '@mui/material/Button';

const Data = (props)=>{
    const [expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title : "",
        content : ""
    });

    const inputEvent = (event)=>{
        const {name,value} = event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value ,
            }
        })
        console.log(note);
    };

    const addEvent = ()=>{
        props.passNote(note);  
        setNote({title:"",content:""});
    };

    const expandIt = ()=>{
        setExpand(true);
    }

    const backToNormal = ()=>{
        setExpand(false);
    }

    return (
        <>
            <div className="main_note" onDoubleClick = {backToNormal}>
                <form>
                    {expand ?
                        <input 
                            className="separate"
                            type="text" 
                            name="title"
                            value={note.title}
                            onChange = {inputEvent}
                            placeholder="Title" 
                            autoComplete="off"
                        />:null
                    }
                    <br/>
                    <textarea className="separate"
                        rows='' 
                        column='' 
                        name="content"
                        value={note.content}
                        onChange = {inputEvent}
                        placeholder="write a Short Note"
                        autoComplete="off"
                        onClick={expandIt}
                    >
                    </textarea>
                    <br/>
                    {expand?
                        <Button 
                            onClick = {addEvent}
                            className="pos"
                            variant="contained"
                            color="error"
                        >
                            +🙌✔
                        </Button> : null
                    }
                </form>
            </div>
        </>
    )
};

export default Data;