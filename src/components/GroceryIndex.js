import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchGroceries } from "../actions/groceryActions";

class GroceryIndex extends Component {
    componentDidMount() {
        this.props.fetchGroceries();
    }
    render() {
        console.log(this.props.groceries)
        return (
            <div>
               POS Isn't Working 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {groceries: state.groceries};
}

export default connect(mapStateToProps, {fetchGroceries})(GroceryIndex);
