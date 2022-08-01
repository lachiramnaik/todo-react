import Addform from './addform';
import Showtodo from './showtodo';
const { useState } = require("react");
const { useEffect } = require("react");
const { render } = require("react-dom");
let id = 0;
const App = () => {
    const [todo, settodo] = useState([]);
    const [todotext, settodotext] = useState('');


useEffect(()=>{

if(localStorage.getItem("xyz")){
  settodo(JSON.parse((localStorage.getItem("xyz"))))
}else{
  localStorage.setItem("xyz",JSON.stringify([]))
}
},[]);

useEffect(() => {
  localStorage.setItem("xyz",JSON.stringify(todo))
}, [todo]);



    const add = () => {
        if (todotext !== ' ') {
            settodo([...todo, { id: id + 1, task: todotext, status: false }]);
            id = id + 1;
            settodotext(' ');
        } else {
            alert("Empty text");
        }
    }

    const del = (id) => {
        settodo(todo.filter(todo => todo.id !== id))
    }
    const complete = (id, status) => {
      const updated_todos = todo.map((todo) => {
        if (todo.id === id) {
          return {
            // ...todo
            ...todo,
            status: status,
          };
        } else {
          return todo;
        }
      });
      settodo(updated_todos);
    };
  

    return (
        <>
<Addform todotext={todotext} settodotext={settodotext} add={add}/>
<Showtodo complete={complete} todos={todo} del={del}/>
           {/* <input type="text" placeholder="Enter your task" value={todotext} onChange={(e) => settodotext(e.target.value)}></input>
            <button onClick={add}>Add</button>
            <div className="todos">
                {todo.map(todo => {
                    return <p key={todo.id}>{todo.id}{todo.task}
                        <button onClick={function () { del(todo.id) }}>Delete</button>
                    
                    </p>
                })}
            </div>*/}
        </>

    )
}
render(<App />, document.getElementById('root'));