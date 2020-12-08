import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteGrocery } from '../actions/groceryActions'


const Groceries = (props) => {
    // console.log(props.groceries)

    const handleDelete = (event, grocery) => {
        event.stopPropagation()
        event.preventDefault();
        props.deleteGrocery(grocery.id)
    }

    return (
        <div>
            <h1>Groceries</h1>
            {props.groceries.map(grocery =>
                <div key={grocery.id}>
                    <Link to={`/groceries/${grocery.id}`}>{grocery.item}<button onClick={(event) => handleDelete(event, grocery)}>Delete</button></Link>
                    {/* <Link>{grocery.qty}</Link>
          <Link>{grocery.comments}</Link> */}
                </div>
            )}
        </div>
    );
};
export default connect(null, { deleteGrocery })(Groceries) ;