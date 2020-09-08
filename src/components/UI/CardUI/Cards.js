import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardUI from './CardUI';

const Cards = (props) => {
    const [show, setShow] = useState(false);
    const [movieContent, setMoviewContent] = useState(props.data);
    const [selectData, setSelectedData] = useState();

    const cardGrp = movieContent.map((data,key) => 
                // <div className='container-fluid d-flex justify-content-center'>
                //     <div className='col-md-4'>
                //         <div className='row'>
                            <CardUI moviePoster={data.poster_path} title={data.title} handleClick={() => handleShow(data)}  key={key}/>
                //         </div>
                //     </div>
                // </div>
            )

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
                        <table border={1}>
                            <tr>
                                <th>Movie's original language</th>
                                <th>title</th>
                                <th>Movie's original title</th>
                                <th>Overview of movie</th>
                                <th>Average Vote</th>
                                <th>Realease Date</th>
                            </tr>

                            {selectData ?
                                <tr>
                                    <td>{selectData.original_language}</td>
                                    <td>{selectData.title}</td>
                                    <td>{selectData.original_title}</td>
                                    <td>{selectData.overview}</td>
                                    <td>{selectData.vote_average}</td>
                                    <td>{selectData.release_date}</td>
                                </tr>
                                : ''}

                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {movieContent ? 
                <div className='container-fluid d-flex justify-content-center'>
                        <div className='col-md-4'>
                            {cardGrp}
                        </div>
                </div>
            : ''}
        </div>
    );
}
export default Cards;