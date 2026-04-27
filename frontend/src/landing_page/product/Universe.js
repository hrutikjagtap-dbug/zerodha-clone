import React from 'react';


function Universe() {
    return ( 
        <div className="container p-5 mt-5 border-top">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p className='p-2'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="Media\images\smallcaseLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images\streakLogo.png"  style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images\sensibullLogo.svg"style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images\goldenpiLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images\dittoLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary mt-5 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
     );
}

export default Universe;