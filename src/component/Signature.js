import React from "react";

const Signature = () => {
  return (
    <div className="col-md-10 offset-md-1 my-5">
      <div className=" signature-con my-5">
        <div className="float-start address">
          Regards,<br></br>
          Matt Denholm<br></br>
          Sales - Sales Advisor
        </div>

        <div className="float-end signature">
          <h3 className="sign">Signature:</h3>
          <p>Date Signed:</p>
          <p>Printed Name: Greg Ballintyne</p>
          <p>Job Position:</p>
        </div>
      </div>
      <p className="amount">Total Minimum Commitment is $ 4,186.06</p>
      <br></br>
      <br></br>
    </div>
  );
};

export default Signature;
