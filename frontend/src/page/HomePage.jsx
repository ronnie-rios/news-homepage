import React from 'react'
import landingImg from '../assets/images/image-web-3-desktop.jpg';
import data from '../data/data';

const news = [
       {
        id: 4,
        title: 'Hydrogen VS Elecctric Cars',
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
        <div className='row-span-2 p-2'>
            <h1 className='text-2xl'>New</h1>
            {news.map((item) => (
                <div className='py-10'>
                    <h3>{item.title}</h3>
                    <p>{item.heading}</p>
                </div>
            ))}
            
        </div>
        <div className='md:col-start-1 md:col-span-1'>The Bright Future of Web 3.0?</div>
        <div className='md:col-span-1'>we dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. but is it really fullfilling its promise?</div>
            {data.map((item) => (
                <div className='col-span-1' key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.heading}</p>
                    <img src={item.img} alt={item.img} />
                </div>
            ))}
    </main>
  )
}

export default HomePage