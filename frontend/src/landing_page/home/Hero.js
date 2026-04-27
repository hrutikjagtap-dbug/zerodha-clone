import React from 'react';



function Hero() {
    return (  
      <div className='container mb-5'>
        <div className= 'row text-center'>
            <img src='Media/images/homehero.png' alt='Hero Image' className='mb-5' />
            <h1 className='mt-5'>Invest In Everything !</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more...</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"25%" , margin : "0 auto",borderRadius:"2rem"}}>Signup now</button>
        </div>
      </div>
    );
}

export default Hero;