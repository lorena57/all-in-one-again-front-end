import React from 'react'

const Grocery = (props) => {
  

    // this pulls out the specific item
    let grocery = props.groceries[props.match.params.id - 1]





    return (
        <div>
            <h1>Grocery</h1>
            <li>
                {/* 1st time the array is rendering groceries is an empty array, the 2nd time is renders it gets the grocery */}

                {grocery ? grocery.item : null}
            </li>
        </div>
    );
};
export default Grocery;