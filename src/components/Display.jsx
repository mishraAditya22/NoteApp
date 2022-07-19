import React from 'react';
import Button from '@mui/material/Button';


const Display = (props) => {
    const DeleteNote = ()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="content">
                <h1>{props.title}</h1>
                <h3>{props.content}</h3>
                <Button
                    onClick={DeleteNote} 
                    className="pos"
                    variant="contained"
                    color="error"
                >
                    Delete
                </Button>
            </div>
        </>
    )
};

export default Display;