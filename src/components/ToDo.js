import {Fragment, React, useEffect, useState} from "react";
import axios from "axios";

const ToDo = () => {

    const [userId, setUserId] = useState('1');
    const [userToDos, setUserToDos] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/todo/${userId}/pending`)
        .then(({data})=>{
            setUserToDos(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <div className="flex flex-row px-3 pt-1 text-left place-content content-around w-5/6 h-96 shadow-2xl rounded-xl border-solid border-black bg-white divide-x divide-slate-100">
            <div className="w-96 text-xl font-bold text-indigo-500">
                <div className="flex flex-row place-content-between">
                    <h2>To-Do List</h2>
                </div>
                <div className="flex flex-col">
                    {userToDos.map((toDo)=>{
                        return <ListItem  item={toDo} />
                    })}
                </div>
            </div>
        </div>
    )
}

const ListItem = ({item}) => {

    const checkedBox = (event) =>{
        if(event.target.checked){
            console.log('Task was completed');
            axios.patch(`http://localhost:8080/todo/${event.target.value}/done`);
        }
    }
    return(
        <Fragment key={item.id}>
        <div className='w-full border border-blue-500 rounded-md px-2 flex flex-col my-1'>
            <div className="flex flex-row divide-x">
            <input type='checkbox' value={item.id} name={item.id} onChange={checkedBox} className='ml-1' />
            <div className="flex flex-col mx-auto">
            <span className="text-xs text-gray-400 italic">{item.dueAt}</span>
            <p className="text-sm">{item.content}</p>
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default ToDo;