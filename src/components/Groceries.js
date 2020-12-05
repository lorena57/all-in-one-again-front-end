import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Groceries = (props) => {
    // console.log(props.groceries)
    return (
        <div>
            <h1>Groceries</h1>
            {props.groceries.map(grocery =>
                <div key={grocery.id}>
                    <Link to={`/groceries/${grocery.id}`}>{grocery.item}</Link>
                    {/* <Link>{grocery.qty}</Link>
          <Link>{grocery.comments}</Link> */}
                </div>
            )}
        </div>
    );
};
export default Groceries;