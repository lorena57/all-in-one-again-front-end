import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchGroceries } from "../actions/groceryActions";
import {Link} from 'react-router-dom'

class GroceryIndex extends Component {
    componentDidMount() {
        this.props.fetchGroceries();
    }

    renderGroceries() {
        return _.map(this.props.groceries, groceries => {
            return (
                <li key={groceries.id}>
                    {groceries.qty}
                </li>
            );
        });
    }

    render() {

        return (
            <div>
                <div>
                    <Link to='/grocery/new'>
                    Add Grocery
                    </Link>
                </div>
              <h3>POS ISN'T WORKING</h3>
              <ul>
                    {this.renderGroceries()}
              </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { groceries: state.groceries};
}

export default connect(mapStateToProps, { fetchGroceries})(GroceryIndex);
