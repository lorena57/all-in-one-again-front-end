import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteGrocery } from '../actions/groceryActions'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Groceries = (props) => {

    const classes = useStyles();
    // const handleDelete = (event, grocery) => {

    const handleDelete = ( grocery) => {
        // event.stopPropagation()
        // event.preventDefault();
        props.deleteGrocery(grocery.id)
    }

    return (
        <div>
            <h1>Groceries</h1>
            {props.groceries.map(grocery =>
                <div key={grocery.id}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.pos} >
                                    Item: {grocery.item}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Qty: {grocery.qty}
                                </Typography>
                                <Typography variant="body2" component="p">
                                   Note: {grocery.comments}
                                </Typography>
                            </CardContent>
                            
                            <CardActions>
                            {/* <Button onClick={(event) => handleDelete(event, grocery)}>Delete</Button> */}
                                <Button onClick={(event) => handleDelete( grocery)}>Delete</Button>
                            </CardActions>
                        </Card>
                </div>
            )}
        </div>
    );
};
export default connect(null, { deleteGrocery })(Groceries) ;