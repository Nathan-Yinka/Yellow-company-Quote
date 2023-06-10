import React from "react";

const List = () => {
  return (
    <div className="col-md-10 offset-md-1 my-5">
      <h3 style={{ fontWeight: "700" }} className="">
        Important
      </h3>
      <ul>
        <li>
          The terms that apply to your product(s) can be found at
          <a href="www.yellow.com.au/terms"> www.yellow.com.au/terms</a>{" "}
          (Terms). Please read them carefully.
        </li>
        <li>
          Minimum Periods apply and are specified in this quote. You can cancel
          by writing or phone and we'll action it within 14 days. Cancellation
          fees apply if you cancel during the Minimum Period.
        </li>
        <li>
          For Printed Products and Targeted Solutions that include a Printed
          Product, your contract will automatically renew each year for a
          further 12 month Minimum Period. This means your Printed Product will
          be published in subsequent editions of the relevant directory and your
          Digital Product will continue to be supplied on the latest terms and
          price unless cancelled by the renewal date. For Printed Products and
          Targeted Solutions that include a Printed Product, you must cancel by
          the Close Date to avoid cancellation fees. The Close Date for your
          product(s) can be found at{" "}
          <a href="www.yellow.com.au/closedates">
            www.yellow.com.au/closedates
          </a>
        </li>
        <li>
          For Digital Products, we will continue to supply your product after
          the Minimum Period on the latest terms and price until cancelled under
          the Terms.
        </li>
        <li>
          Where termed discounts are applied, the product will revert to
          standard monthly rates at the end of the discount period.
        </li>
        <li>
          It’s your responsibility to notify us if you change your contact
          details or if you want to make changes to your content. Changes to
          Digital Products can be made at any time. Changes to Printed Products
          can only be made prior to the Close Date.
        </li>
        <li>
          By approving the quote, you confirm that you are authorised to
          purchase advertising on behalf of the customer identified in the quote
          and you understand that we will continue to supply the products until
          cancelled under the Terms.
        </li>
      </ul>
    </div>
  );
};

export default List;
