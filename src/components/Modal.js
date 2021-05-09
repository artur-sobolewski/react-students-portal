import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './Modal.css';

const MyModal = (props) => {

    function convTags (arg) {
        let t = "";
        arg.map(notification => {
            t = t.concat(notification, " ")
        });
        return t;
    }

    const [name, setName] = React.useState(props.curStudent.name);
    const [surname, setSurname] = React.useState(props.curStudent.surname);
    const [description, setDescription] = React.useState(props.curStudent.description);
    const [tags, setTags] = React.useState(convTags(props.curStudent.tags));
    const [photoUrl, setPhotoUrl] = React.useState(props.curStudent.photoSrc);
    const [showWarning, setShowWarning] = React.useState(false);

    function handleChangeImage(event) {
        setPhotoUrl(URL.createObjectURL(event.target.files[0]));
    }

    function onPressed() {
        
        let t;
        
        if (name !== "" && surname !== "") {
            props.curStudent.name = name;
            props.curStudent.surname = surname;
            props.curStudent.description = description;
            t = tags.toLowerCase().split(" ");
            props.curStudent.tags = t;
            props.curStudent.photoSrc = photoUrl;
            props.curStudent.name = name;
            props.onHide();
        } else if (name === "") {
            setShowWarning(true);
        } else if (name === "") {
            setShowWarning(true);
        }
    }

    function handleKey(event) {
        if (event.code === "Enter") {
            let t;
            if (name !== "" && surname !== "") {
                props.curStudent.name = name;
                props.curStudent.surname = surname;
                props.curStudent.description = description;
                t = tags.toLowerCase().split(" ");
                props.curStudent.tags = t;
                props.curStudent.photoSrc = photoUrl;
                props.curStudent.name = name;
                props.onHide();
            } else if (name === "") {
                setShowWarning(true);
            } else if (name === "") {
                setShowWarning(true);
            }
        }
    }

    return (
        <div className="">
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        styles={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 0, 0, 0.4)'
              },
            content: {
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '5px solid #ccc',
                background: '#0',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '20px',
                backgroundColor: 'rgba(255, 0, 0, 0.4)'
              }
            }}
        >
            <Modal.Header closeButton>
            <div className="col-8 mb-4 mt-4 offset-2 centered-text main-text-type">
                        <h3>Edit student application</h3>
            </div>
            </Modal.Header>
            
            <Modal.Body>
                {showWarning &&
                <div className=" container col-12 col-lg-4 float-center edit-form mt-4">
                    <div className="col-12 mb-2 centered-text">
                        <div className="col-12 mb-2">
                            <h3>Wrong entery!</h3>
                        </div>
                        <div className="col-12 mb-2">
                            <h6>Need to enter name and surename</h6>
                        </div>
                    </div>
                </div>}
            <div className=" container col-12  float-center mt-3 edit-form main-text-type">
                <div className="row"> 
                    <div className="row col-12 mb-2">
                        <div className="col-3 col-sm-3">
                            <label htmlFor="name">Name: </label>
                        </div>
                        <div className="col-9 col-lg-6">
                            <input
                                type={"text"}
                                value={name}
                                id={"name"}
                                className={"bg-light form-control"}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={handleKey}
                            />
                        </div>
                    </div>
                    <div className="row col-12 mb-2">
                        <div className="col-3 col-sm-3">
                            <label htmlFor="surname">Surname: </label>
                        </div>
                        <div className="col-9 col-lg-6">
                            <input
                                type={"text"}
                                value={surname}
                                id={"surname"}
                                className={"bg-light form-control"}
                                onChange={(e) => setSurname(e.target.value)}
                                onKeyDown={handleKey}
                            />
                        </div>
                    </div>
                    <div className="row col-12 mb-2">
                        <div className="col-3 col-sm-3">
                            <label htmlFor="description">Description: </label>
                        </div>
                        <div className="col-lg-12 col-xl-8">
                        <textarea
                            value={description}
                            id={"description"}
                            className={"bg-light form-control break-text"}
                            onChange={(e) => setDescription(e.target.value)}
                            onKeyDown={handleKey}
                        />
                        </div>
                    </div>
                    <div className="row col-12 mb-2">
                        <div className="col-3 col-sm-3">
                            <label htmlFor="tags">Tags: </label>
                        </div>
                        <div className="col-9 col-lg-6">
                            <input
                                type={"text"}
                                value={tags}
                                id={"tags"}
                                className={"bg-light form-control"}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row col-12 mb-2">
                        <div className="col-3 col-sm-3">
                            <label htmlFor="img">Photo: </label>
                        </div>
                        <div className="col-9 col-lg-6">
                            <input
                                type="file"
                                id="img"
                                name="img"
                                accept="image/*"
                                className={"bg-light form-control"}
                                onChange={handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="row col-12 mb-2 centered-text pt-3">
                        <div className="col-sm-12 col-lg-6 pt-3">
                            <button className="btn btn-success my-button" onClick={onPressed}>Save</button>
                        </div>
                        <div className="col-sm-12 col-lg-6 pt-3">
                            <button className="btn btn-info my-button" onClick={props.onHide}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </div>
    );
}

export default MyModal;