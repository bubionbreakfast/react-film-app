import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{

    constructor(props){
        super(props)
        this.handlePageChange = this.handlePageChange.bind(this);
        // this.state = { page_number: 0 }
    }
    

        handlePageChange(){
            window.location.hash = "https://www.imdb.com/calendar/?region=gb"
        }

        render(){
        const filmNodes = this.props.films.map(film => {
            return (
                <Film
                name={film.name}
                key={film.id}>
                    {film.url}

                </Film>
            )
        })

       

        return(
        <div className="film-list">
            {filmNodes}
            {/* <input type="button" onClick="location.href='https://www.imdb.com/calendar/?region=gb';" value="Go to film" /> */}
            <button onClick={this.handlePageChange}>View more upcoming releases</button>

        </div>
        )
    }


}




export default FilmList;