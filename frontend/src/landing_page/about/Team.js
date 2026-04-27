import React from 'react';

function Team() {
    return ( 
        <div className='container'>
             <div className="row p-3 mt-5 border-top">
     <h1 className='text-center mb-5'>people</h1>
     </div>
          <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className='col-6 p-3' >
             <p style={{textDecoration:"none"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{textDecoration:"none"}}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{textDecoration:"none"}}>Playing basketball is his zen.</p><br/>
          <p style={{textDecoration:"none"}}>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
     </div>
     </div> 
     
    );
}

export default Team;