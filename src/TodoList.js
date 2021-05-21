import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [ todos, setTodo ] = useState();

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
            const responseData = res.data;
            setTodo( responseData );
        })
    }, [])

    { todos && todos.map((todo) => {
        const { id, title } = todo;
        return (
            <div key={id}>
                <h6>{id} {title}</h6>
            </div>
        );
    })}

}

export default TodoList;