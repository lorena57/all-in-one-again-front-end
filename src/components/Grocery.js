import React from 'react'

const Grocery = (props) => {
    // console.log(props.groceries)
    let grocery = props.groceries[props.match.params.id - 1]
    console.log(grocery)
    return (
        <div>
            <h1>Grocery</h1>
            <li>
                {grocery ? grocery.item : null}
            </li>
        </div>
    );
};
export default Grocery;