import React from "react";

const MainTable = () => {
  return (
    <main className="mt-5">
      <table>
        <colgroup>
          <col className="col-1"></col>
          <col className="col-2"></col>
          <col className="col-3"></col>
          <col className="col-4"></col>
        </colgroup>
        <tr className="header-row">
          <th className="ps-md-5">Product name</th>
          <th>
            Advertising <br></br> Area Count
          </th>
          <th>Setup fee</th>
          <th>Monthly fee</th>
        </tr>
        <tr className="">
          <td className="ps-md-5">Yellow Pages Digital - Professional Plus</td>
          <td>30</td>
          <td>$ 0.00</td>
          <td>$ 140.34</td>
        </tr>

        <tr>
          <td className="ps-md-5">
            <div>
            <span style={{fontSize:"80%"}} className="ps-3">Plumbers & Gasfitters</span><br></br>
            YPOL Sales Offer - First 3 months
            free
            </div>
          </td>
          <td></td>
          <td></td>
          <td>-$697.02</td>
        </tr>

        <tr >
          <td></td>
          <td></td>
          <td>(for the first 3 months)</td>
          <td></td>
        </tr>
        <tr>
          <td className="ps-md-5">
            <span style={{fontSize:"60%"}} className="ps-3">Minimum Period is 12 months</span><br></br>
            SEO - Regional and Rural
          </td>
          <td></td>
          <td>$ 199.00</td>
          <td>$ 250.00</td>
        </tr>

        <tr>
          <td className="ps-md-5"><span style={{fontSize:"60%"}} className="ps-3">Minimum Period is 12 months</span></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="ps-md-5">Once off Charge</td>
          <td></td>
          <td>$ 199.00</td>
          <td></td>
        </tr>

        <tr className="table-footer" >
            <th className="ps-md-5">TOTAL MONTHLY</th>
            <th></th>
            <th></th>
            <th>$ 390.34</th>
        </tr>

        <tr>
            <td className="ps-md-5" style={{opacity:"0.5"}}>All prices include GST.</td>
        </tr>
      </table>
    </main>
  );
};

export default MainTable;
