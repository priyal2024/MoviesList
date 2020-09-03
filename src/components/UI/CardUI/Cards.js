import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardUI from './CardUI';

const Cards = (props) => {
    const [show, setShow] = useState(false);
    const [movieContent, setMoviewContent] = useState(props.data);
    const [selectData, setSelectedData] = useState();

    let id = [];
    let title = [];
    let posterImg = [];

    for (let i = 0; i < 4; i++) {
        if (movieContent[i] != undefined) {
            id.push(movieContent[i].id);
            title.push(movieContent[i].title);
            posterImg.push(movieContent[i].poster_path);
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = (data) => { setSelectedData(data); setShow(true); }

    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose}>
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
                                <th>Average Vote</th>
                                <th>Realease Date</th>
                            </tr>

                            <tr>
                                <td>{selectData ? selectData.original_language : ''}</td>
                                <td>{selectData ? selectData.title : ''}</td>
                                <td>{selectData ? selectData.original_title : ''}</td>
                                <td>{selectData ? selectData.overview : ''}</td>
                                <td>{selectData ? selectData.vote_average : ''}</td>
                                <td>{selectData ? selectData.release_date : ''}</td>
                            </tr>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} >
                            Close
                                </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CardUI moviePoster={posterImg[0]} title={title[0]} handleClick={() => handleShow(movieContent[0])} id={id[0]} />
                    </div>
                    <div className='col-md-4'>
                        <CardUI moviePoster={posterImg[1]} title={title[1]} handleClick={() => handleShow(movieContent[1])} id={id[1]} />
                    </div>
                    <div className='col-md-4'>
                        <CardUI moviePoster={posterImg[2]} title={title[2]} handleClick={() => handleShow(movieContent[2])} id={id[2]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;