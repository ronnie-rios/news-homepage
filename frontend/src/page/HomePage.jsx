import React from 'react'
import landingImg from '../assets/images/image-web-3-desktop.jpg';
import data from '../data/data';

const HomePage = () => {
    console.log(data[0].img);
  return (
    <main className='grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2'>
            <img src={landingImg} alt="landing img" />
        </div>
        <div className='row-span-2'>
            <h3>New</h3>
            
        </div>
        <div className='md:col-start-1 md:col-span-1'>The Bright Future of Web 3.0?</div>
        <div className='md:col-span-1'>we dive into the next evolution of the web that claims to ptu the power of the platform back into the hands of the people. but is it really fullfilling its promise?</div>
        {/* <div className='md:col-span-3'> */}
            {data.map((item) => (
                <div className='col-span-1'>
                    <h4>{item.title}</h4>
                    <p>{item.heading}</p>
                    <img src={item.img} alt={item.img} />
                </div>
            ))}
        {/* </div> */}
    </main>
  )
}

export default HomePage