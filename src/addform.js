import React from 'react'
import styles from './index.module.css';
const Addform = (props) => {
  return (
    <div>
      <center><h1 className={styles.heading}>Todo with React js</h1></center>
      <center><hr className={styles.hr} /></center>
      <div className='container'>
        <div className="row justify-content-center">
          <div className='col-lg-6'>
           
<div className={`card text-center ${styles.card}`}>
  <div className={`card-body ${styles.cardbody}`}>
 <h2>Enter your Task</h2>
  <input type="text" placeholder="Enter your task" value={props.todotext} onChange={(e) => props.settodotext(e.target.value)}></input><br></br>
  <br />
    <button className={styles.addbutton} onClick={props.add}>Add</button>
  </div>
</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Addform