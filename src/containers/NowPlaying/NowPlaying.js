import React from 'react';
import CardGrp from '../../components/UI/CardUI/Cards';

export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.getMovieData = this.getMovieData.bind(this);

        this.state = {
            movieContent: [],
            errorMessage: '',
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=50e5cb56b809b60eb512b21209bb4b53&language=en-US&page=1')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                this.getMovieData(data);
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    getMovieData(movieData) {
        let data = this.state.movieContent;
        data[0] = movieData.results[0];
        data[1] = movieData.results[1];
        data[2] = movieData.results[2];

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
