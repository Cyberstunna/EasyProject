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
    },[userToDos, userId]);

    return(
        <div className="px-3 pt-1 text-left w-5/6 h-96 shadow-2xl rounded-2xl border-solid border-black bg-white">
            <div className="w-full text-xl font-bold text-indigo-500 flex flex-col place-content-between">
                <div className="flex flex-row place-content-between">
                    <h2>To-Do List</h2>
                </div>
                <div className="flex flex-col overflow-y-auto overflow-x-clip w-5/6 max-h-72 m-auto">
                    { userToDos.map((toDo)=>{
                            return <ListItem  item={toDo} user={userId} setUserToDos={setUserToDos} />
                        })
                    }
                </div>
                <div className="absolute bottom-0 py-3">
                    <span className="text-xs">Outstanding Tasks: {userToDos.length}</span>
                </div>
            </div>
        </div>
    )
}

const ListItem = ({item, user, setUserToDos}) => {

    const checkedBox = (event) =>{
        if(event.target.checked){
            console.log('Task was completed');
            axios.patch(`http://localhost:8080/todo/${event.target.value}/done`, {user: user})
            .then(({data})=>{
                setUserToDos(data);
            })
        }
    }
    return(
        <Fragment key={item.id}>
        <div className='w-full border border-blue-500 rounded-xl px-2 flex flex-col my-1 shadow-xl'>
            <div className="flex flex-row divide-x">
            <div className="my-auto bw-1/6">
            <input type='checkbox' value={item.id} name={item.id} onChange={checkedBox} className='ml-1' />
            </div>
            <div className="flex flex-col mx-auto w-4/6 pl-1">
            <span className="text-xs text-gray-400 italic">Due on {item.dueAt}</span>
            <p className="text-sm">{item.content}</p>
            </div>
            <div className="flex flex-row m-auto w-fit pl-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <img alt="Members of the task" src="https://xsgames.co/randomusers/avatar.php?g=male" className='rounded-full w-auto h-8' />
            <img alt="Members of the task" src="https://xsgames.co/randomusers/avatar.php?g=female" className='rounded-full w-auto h-8 relative right-3' />
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default ToDo;