import React, {Component} from 'react';

class Film extends Component{
    render(){
        return(
            <div className="film">
                <h4><a href={this.props.children}>{this.props.name}</a></h4>
                {/* <p><a href="{this.props.url}">{this.props.name}</a></p> */}

            </div>
        )
    }
}



export default Film;