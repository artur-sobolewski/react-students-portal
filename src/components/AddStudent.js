import React from 'react';
import Student from '../models/Student';
import './AddStudent.css'
import person from '../images/person.png';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const AddStudent = (props) => {
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [tags, setTags] = React.useState("");
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [showWarning, setShowWarning] = React.useState(false);
    let newStud = null;

    function handleChangeImage(event) {
        setPhotoUrl(URL.createObjectURL(event.target.files[0]));
    }

    function onPressed() {
        
        let t;
        
        if (name !== "" && surname !== "") {
            if (photoUrl === "") {
                t = tags.toLowerCase().split(" ");
                newStud = new Student(name, surname, description, person, t);
            } else {
                t = tags.toLowerCase().split(" ");
                newStud = new Student(name, surname, description, photoUrl, t);
            }
            if( newStud !== null)
            {
                props.appendStudent(newStud);
                newStud = null;
                setName("");
                setSurname("");
                setDescription("");
                setPhotoUrl("");
                setTags("");
                setShowWarning(false);
                return NotificationManager.success("Application has been added correctly", 'Success');
            }
            else {
                return NotificationManager.error("Something gone wrong", 'Error', 5000);
            }
            
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
                if (photoUrl === "") {
                    t = tags.split(" ");
                    newStud = new Student(name, surname, description, person, t);
                } else {
                    t = tags.split(" ");
                    newStud = new Student(name, surname, description, photoUrl, t);
                }
                if( newStud !== null)
                {
                    props.appendStudent(newStud);
                    newStud = null;
                    setName("");
                    setSurname("");
                    setDescription("");
                    setPhotoUrl("");
                    setTags("");
                    setShowWarning(false);
                    console.log("ok");
                    return NotificationManager.success("Application has been added correctly", 'Success');
                }
                else {
                   return NotificationManager.error("Something gone wrong", 'Error', 5000);
                }
                
            } else if (name === "") {
                setShowWarning(true);
            } else if (name === "") {
                setShowWarning(true);
            }
        }
    }

    return (
        <>
        {showWarning &&
            <div className="panel container col-10 col-lg-4 float-center adding-form mt-4">
                <div className="col-12 mb-2 centered-text">
                    <div className="col-12 mb-2">
                        <h3>Wrong entery!</h3>
                    </div>
                    <div className="col-12 mb-2">
                        <h6>Need to enter name and surename</h6>
                    </div>
                </div>
            </div>}
        <div className="panel container col-10 col-lg-7 float-center mt-3 adding-form main-text-type">
            <div className="row">
                <div className="col-8 mb-4 mt-4 offset-2 centered-text">
                    <h3>Student application</h3>
                </div>
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
                <div className="row col-12 mb-2 centered-text">
                    <div className="col-12">
                        <button className="btn btn-success my-button" onClick={onPressed}>Apply</button>
                        {/* <button className="btn btn-success my-button" onClick={createNotification('success', "Application has been added correctly")}>Apply</button> */}
                        <NotificationContainer/>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default AddStudent;