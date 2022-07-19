import React,{useState} from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Data from './components/Data';
import Display from './components/Display';

const App = ()=>{
    const [addItem,setAddItem] = useState([]);
    const addNote = (note)=>{
        //alert("i an ckicked");
        setAddItem((prevData)=>{
            return [note,...prevData]
        });
        console.log(note);
    };
    const onDelete = (id)=>{
        setAddItem((prevData)=>
            prevData.filter((currData,index)=>{
                return index!==id;
            })
        );
    };
    return (
        <>
            <div className="app_inside">
                <Header/>
                <Data passNote={addNote}/>
                {addItem.map((val,index)=>{
                    return <Display 
                        key = {index}
                        id = {index}
                        title = {val.title}
                        content = {val.content}
                        deleteItem = {onDelete}
                    />
                })}
                <Footer/>
            </div>
        </>
    )
}

export default App;