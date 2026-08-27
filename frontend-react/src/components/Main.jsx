import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minus ullam animi error id quam obcaecati excepturi? Molestias corrupti odio eligendi explicabo laborum, tempora possimus atque reprehenderit iste aliquid aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quo aperiam. Consequuntur officia animi tempore blanditiis, harum dolores earum quas eius, soluta, mollitia quis error expedita deleniti. Dicta, dolore architecto!</p>
                <Button text='Login' class='btn-info'/>
            </div>
        </div>
    </>
  )
}

export default Main