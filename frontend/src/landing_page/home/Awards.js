import React from 'react';

function Awards () {
    return ( 
       <div className='container mt-5' >
            <div className='row' >
                <div className='col-6 p-5' >
                    <img src='/Media/images/largestBroker.svg' alt='Brokewr image' />
                </div>
                <div className='col-6  p-5 mt-3' >
                    <h1>Largest stock broker in India</h1><br></br>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in 
                        India daily by trading and investing in :</p>
                        <div className='row'>
                            <div className='col-6 '>   
                            <ul>
                                 <li>Futures and Options</li>
                            </ul>
                                <ul>
                                    <li>Commodity derivatives</li>
                                </ul>
                                <ul>
                                    <li>Currency derivatives</li>
                                </ul>
                                </div>
                            <div className='col-6 '>
                            <ul>
                                <li>
                                    Stocks & IPOs
                                </li>
                            </ul>
                             <ul>
                                <li>
                                   Direct mutual funds
                                </li>
                            </ul>
                             <ul>
                                <li>
                                    Bonds and Gov. securities
                                </li>
                            </ul>
                            </div>
                        </div>
                        <img src='Media\images\pressLogos.png' alt='press logo' style={{width : '90%'}}/>
                </div>
            </div>
       </div>
     );
}

export default Awards;