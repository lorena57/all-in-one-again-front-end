import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,        
    },
    title: {
        fontSize: 14
    },
    cardActionArea: {
        flexGrow: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
});


const Note = ({note}) => {

    const classes = useStyles();


    return (
        <div>

            <Card className={classes.root}>
                <CardContent className={classes.cardActionArea}>
                    <Typography  variant="body2" component="p">
                        {/* <p>{note.id}</p> */}
                        <p>{note.title}</p>
                        <p>{note.content}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>

            {/* <p key={note.id}></p>
            <p>{note.id}</p>
            <p>{note.title}</p>
            <p>{note.content}</p>
             */}



 

        </div>
    )
}

export default Note;
