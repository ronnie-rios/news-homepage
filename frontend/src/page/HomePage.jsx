import React from 'react'
import landingImg from '../assets/images/image-web-3-desktop.jpg';
import data from '../data/data';

const news = [
       {
        id: 4,
        title: 'Hydrogen VS Electric Cars',
        heading: 'Will hydrogen-fuled cars ever catch up to EVs?'
    },
    {
        id: 5,
        title: 'The Downsides of AI Artistry',
        heading: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        id: 6,
        title: 'Is VC Funding Drying Up?',
        heading: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    },
]

const HomePage = () => {
    
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
            <img src={landingImg} alt="landing img" />
        </div>
        <div className='row-span-2 p-6 bg-dark-blue'>
            <h1 className='text-5xl text-orange font-semibold font-display'>New</h1>
            {news.map((item) => (
                <div className='py-8 border-b border-gray-blue font-display'>
                    <h3 className='text-2xl font-semibold text-white pb-3 font-display'>{item.title}</h3>
                    <p className='text-white font-display'>{item.heading}</p>
                </div>
            ))}
            
        </div>
        <div className='md:col-start-1 md:col-span-1'>
            <h1 className="text-7xl text-dark-blue font-bold font-display">The Bright Future of Web 3.0?</h1>
        </div>
        <div className='md:col-span-1 '>
            <p className='text-dark-blue mb-10 font-display'>We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. but is it really fullfilling its promise?</p>
            <button className='bg-red py-3 px-8  text-white tracking-widest font-display'>READ MORE</button>
        </div>
            {data.map((item) => (
                <div className='col-span-1 flex' key={item.id}>
                    <img src={item.img} alt={item.img} className='h-40 w-25' />
                    <div className=' px-4'>
                        <h3 className='text-blue text-3xl font-bold font-display'>0{item.id}</h3>                        
                        <h4 className='text-dark-blue text-xl font-bold py-2 font-display' >{item.title}</h4>
                        <p  className='text-dark-blue font-display'>{item.heading}</p>
                    </div>
                </div>
            ))}
    </main>
  )
}

export default HomePage