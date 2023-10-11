import React from "react";
import Joboffer from "../Component/joboffer";
//put everything what the job requires
//job title
// job description
// job requirement
// job offers you
// job hours
// yearly pay
// 
function Job() {
    return (
        <>
        <div className="container">
            {/* <div className="grid"> */}
                <div className="row">
                    <div className="col-6">

                        <p><h1> job title</h1></p>

                        <p> <h3> job description </h3></p>

                        <p>pay rate</p>
                    </div>

                    <div className="col-6">
                        <p><h2>company name</h2> </p>
                        <p> <h6>company small summary</h6></p>
                        <p> <h6>company adres details</h6></p>

                    </div>
                </div>



            {/* </div> */}


        </div>
        <div className="container"> 
        <div className="row">
            <div className="col-4">
                <h3>hiring manager</h3>
                <p> name</p>
                <p>contact details</p>
                <img src="test" />
            </div>
        </div>
        
        </div>
       
</>
    );
}
