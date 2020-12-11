import React from 'react'

class NoteRating extends React.Component {
    
    state = {
        toggled: false
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render() {
    return(
        <div>
            <button onClick={this.handleClick}>{this.state.toggled ? "1" : "0"}</button>
        </div>
    )
}

}

export default NoteRating;

