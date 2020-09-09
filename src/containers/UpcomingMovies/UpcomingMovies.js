import React from 'react';
import CardGrp from '../../components/UI/CardUI/Cards';

export default class UpcomingMovies extends React.Component {
    constructor(props) {
        super(props);
        this.getMovieData = this.getMovieData.bind(this);

        this.state = {
            movieContent: [],
            errorMessage: '',
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=50e5cb56b809b60eb512b21209bb4b53&language=en-US&page=1')
            .then(response => response.json())
            .then(data => { this.getMovieData(data); })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    getMovieData(movieData) {
        let data = this.state.movieContent;
        for (let i = 0; i < 3; i++) {
            data.push(movieData.results[i]);
        }
        this.setState({ movieContent: data });
    }
    render() {
        const { movieContent } = this.state;
        return (
            <div>
                <CardGrp data={movieContent} />
            </div>
        );
    }
}
