import { useState } from 'react';
import './Home.css'



const Home = ()=>
{
    // store todos
    const[inputValues, setInputValues] = useState('');
    const[todos, setTodos] = useState([]);

    // function to add todos in object
    const handleAdd = ()=>
    {
        setTodos((prevTodos)=>[...prevTodos, inputValues]);
        setInputValues('');
    }

    // handleKeyPress
    const handleKeyPress = (e)=>
    {
        if(e.key === 'Enter')
        {
            setTodos((prevTodos)=>[...prevTodos, inputValues]);
            setInputValues('');            
        }
        else{

        }
    }

    // handle serach icon
    const[serachFlag, setSearchFlag] = useState(false);
    // to search todos of object
    const[searchQuery, setSearchQuery] = useState('');
    const handleSearchQueries = ()=>
    {
        if(searchQuery==='')
        {
            return searchQuery;
        }
        else if(searchQuery.toLowerCase().includes(todos.map((val,i)=>{
            val.toLowerCase();
        }))){
            return searchQuery;
        }
    }
    console.log(searchQuery);

    return(
        <>
            <div className="maincontainer">
                <div className="todo-container">
                    <div className="header">
                        <div className="profile">
                            <div className="image">
                                <img src='../../../public/circle.png' width={40} />
                            </div>
                            <div className="name">
                                <p>Nabaraj</p>
                            </div>
                        </div>
                        <div className="my-name">
                            <p>Nabaraj Basnet</p>
                        </div>
                        <div className="search-icon">
                            {serachFlag?(
                                <input className='search-bar-top' type='text' placeholder='Search...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                            ):(
                                null
                            )}
                            <img src='../../../public/magnifying-glass.png' width={30} onClick={()=>setSearchFlag(!serachFlag)}/>
                        </div>
                    </div>

                    <div className="disptodos">
                        <div className="todos-box">
                            {todos.map((todo,i)=>
                            (
                                <div className="show-todos" key={i}>
                                    <ul>
                                        <li><input type='checkbox' id='myCheckbox'/>{todo}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="take-todos">
                        <div className="input-todo">
                            <input type='text'
                            placeholder='Create Todo...'
                            value={inputValues}
                            onChange={(e)=>setInputValues(e.target.value)}
                            onKeyPress={(e)=>handleKeyPress(e)}
                            />

                            <img src='../../../public/add.png' width={50} height={50} onClick={(e)=>handleAdd()}/>
                        </div>
                    </div>

                    <div className="foot-todos">
                        <p>Copyright 2024 by Nabaraj Basnet</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export {Home};