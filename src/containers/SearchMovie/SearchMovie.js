import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardUI from '../../components/UI/CardUI/CardUI';

export default class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);

        this.state = {
            title: '',
            moviePoster: '',
            errorMessage: '',
            show: false,
            moviesOriginalLanguage: '',
            movieOverview: '',
            status: '',
            movieOriginalTitle: '',
            imdb_id: '',
            budget: null,
            searchMovieName: props.searchResult,
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/find/" + this.state.searchMovieName + "?api_key=50e5cb56b809b60eb512b21209bb4b53&language=en-US&external_source=imdb_id")
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            
                this.setState({
                    moviePoster: data.poster_path,
                    title: data.title,
                    moviesOriginalLanguage: data.original_language,
                    movieOverview: data.overview,
                    status: data.status,
                    movieOriginalTitle: data.original_title,
                    imdb_id: data.imdb_id,
                    budget: data.budget
                });
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
    handleClose() {
        this.setState({ show: false });
    }
    onBtnClick() {
        this.setState({ show: true });
    }

    render() {
        const { title, moviePoster, show, moviesOriginalLanguage, movieOverview, status, movieOriginalTitle, imdb_id, budget } = this.state;

        return (
            <div>
                <div>
                    <center><CardUI title={title} moviePoster={moviePoster} handleClick={this.onBtnClick} /></center>
                </div>
                <div>
                    <Modal show={show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Movie Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <table>
                                <tr>
                                    <th>Movie's original language</th>
                                    <th>title</th>
                                    <th>Movie's original title</th>
                                    <th>Overview of movie</th>
                                    <th>imdb_id</th>
                                    <th>status</th>
                                </tr>
                                <tr>
                                    <td>{moviesOriginalLanguage}</td>
                                    <td>{title}</td>
                                    <td>{movieOriginalTitle}</td>
                                    <td>{movieOverview}</td>
                                    <td>{imdb_id}</td>
                                    <td>{status}</td>
                                </tr>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} >
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
