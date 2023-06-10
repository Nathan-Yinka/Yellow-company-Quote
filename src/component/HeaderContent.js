import React from "react";

const HeaderContent = () => {
  return (
    <div className="col-md-10 offset-md-1 d-md-flex ">
      <div className="header-content-1">
        <table>
          <tr>
            <td>Prepared by:</td>
            <td>Matt Denholm</td>
          </tr>
          <tr>
            <td>Date created:</td>
            <td>04/10/2019</td>
          </tr>
          <tr>
            <td>Date expires:</td>
            <td>18/10/2019</td>
          </tr>
          <tr>
            <td>Quote Number:</td>
            <td>00125239</td>
          </tr>
        </table>
      </div>
      <div className="header-content-2">
        <table className="">
          <tr>
            <td>Customer Number:</td>
            <td>100000075211</td>
          </tr>
          <tr>
            <td>Contact:</td>
            <td>Greg Ballintyne</td>
          </tr>
          <tr>
            <td>Customer Name:</td>
            <td>G J Ballintyne</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              PO Box 9269 Compton <br></br>
              SA 5291 Australia
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>0887250692</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>ballback@bigpond.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HeaderContent;
