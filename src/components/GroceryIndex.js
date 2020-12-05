import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroceries } from "../actions/groceryActions";
import { Link } from 'react-router-dom'
import Grocery from './Grocery'
import Groceries from './Groceries'

class GroceryIndex extends Component {
    componentDidMount() {
        this.props.fetchGroceries();
    }
    render() {
        return (
            <div>
                <div>
                    <Link to='/grocery/new'>
                        Add Grocery
                    </Link>
                </div>
                <Route path='/groceries/:id' render={(routerProps) => <Grocery {...routerProps} groceries={this.props.groceries} />} />
                <Route exact path='/groceries' render={(routerProps) => <Groceries {...routerProps} groceries={this.props.groceries} />} />
                {/* <Grocery groceries={this.props.groceries} /> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        groceries: state.groceries.groceries
    };
}

export default connect(mapStateToProps, { fetchGroceries })(GroceryIndex);