import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroceries } from "../actions/groceryActions";
import { Link } from 'react-router-dom';
// import Grocery from '../components/Grocery';
import Groceries from '../components/Groceries';



class GroceryContainer extends Component {
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
                {/* render takes in a function */}
                {/* You then pass it the component */}
                {/* the function then allows groceries to the props and map/iterate  */}
                {/*  Watch video and 51:58 again */}
                {/* <Route path='/groceries/:id' render={(routerProps) => <Grocery {...routerProps} groceries={this.props.groceries} />} /> */}
                <Route exact path='/groceries' render={(routerProps) => <Groceries {...routerProps} groceries={this.props.groceries} />} />
                {/* <Grocery groceries={this.props.groceries} /> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        // groceries: state.groceryReducer.groceries.groceries
        groceries: state.groceries
    };
}

export default connect(mapStateToProps, { fetchGroceries })(GroceryContainer);

