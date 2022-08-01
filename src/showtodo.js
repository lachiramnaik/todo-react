import React from 'react'
import styles from './index.module.css';
const Showtodo = (props) => {
  return (
   <>
<div className={`container mt-5 ${styles.showcontainer}`}>
  <div className='row justify-content-center'>
    <div className='col-lg-10 text-center'>

   <div className="todos">
      {props.todos.map((todo/*here create any other kinf of variable*/) => {
        return (
          <p key={todo.id}>
            <input
              type="checkbox"
              onChange={(e) => {
                props.complete(todo.id, !todo.status);
              }}
            />
            {todo.status === true ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.task}
              </span>
            ) : (
              <span className={styles.getdata}>{todo.id}{todo.task}</span>
            )}

            <button className={styles.deletebutton}
              onClick={function () {
                props.del(todo.id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
    </div>
  </div>
</div>










   </>
  )
}

export default Showtodo;