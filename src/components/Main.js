import { Component } from 'react';
import Student from '../models/Student';
import { Route, Switch } from 'react-router-dom';
import AddStudent from './AddStudent';
import StudentsList from './StutentsList';
import StudentInfoPane from './StudentInfoPane';
import linus from '../images/linus.jpg';
import person from '../images/person.png';
import samole_pic from '../images/sample_pic.png';
import SearchingPanel from './SearchingPanel';

class Main extends Component {

    state = {
        studentsList: [
            new Student(
                "Artur",
                "Sobolewski",
                "Coś tam umiem",
                linus,
                ["javascript", "css", "java"]),
            new Student(
                "Konrad",
                "Brzeziński",
                "Jestem komunikatywną osobą. Student 3 roku",
                person,
                ["javascript", "css", "react", "c++"]),
            new Student(
                "Mateusz",
                "Woźniak",
                "Ambitny, otwarty na zdobycie nowych umiejętności",
                samole_pic,
                ["c", "c++", "python"]),
        ],
        searchingDesc: "",
        searchingTag: ""
    }

    appendStudent = (newStud) => {
        this.setState({
            studentsList: this.state.studentsList.concat(newStud),
        })
    }
    handleSearchingDescValue = (value) => {
        this.setState({
            searchingDesc: value
        })
    }
    handleSearchingTagValue = (value) => {
        this.setState({
            searchingTag: value.toString().toLowerCase()
        })
    }

    render () {
        const renderStudentsList = this.state.studentsList.map((student, index) => {
            if (this.state.searchingDesc === "") {
                if (this.state.searchingTag === "") {
                    return (

                        <StudentInfoPane key={index + 100} studentInfo={student}/>

                    )
                } else if (student.tags.includes(this.state.searchingTag)) {
                    return (
                        <>
                            <StudentInfoPane key={index + 100} studentInfo={student}/>
                        </>
                    )
                }
            } else {
                if (this.state.searchingTag === "") {
                    if (
                        student.description.toString().toLocaleLowerCase().includes(
                            this.state.searchingDesc.toLocaleLowerCase())) {
                        return (
                            <>
                                <StudentInfoPane key={index + 100} studentInfo={student}/>
                            </>
                        )
                    }
                } else if (student.description.toString().toLocaleLowerCase().includes(
                    this.state.searchingDesc.toLocaleLowerCase()) &&
                    student.tags.includes(this.state.searchingTag)) {
                    return (
                        <>
                            <StudentInfoPane key={index + 100} studentInfo={student}/>
                        </>
                    )
                }
            }
        });
        const studentsToArray = () => {
            const map = {renderStudentsList};
            return Object.keys(map).map((key) => map[key]);
        };
        return (
            <Switch>
                <Route path="/" exact>
                    <div className="main-cont">
                        <div className="row">
                            <div className="col-12 col-md-3 container-fluid float-center centered-text p-3">
                                <SearchingPanel 
                                    captureDescSearching={this.handleSearchingDescValue}
                                    captureTagSearching={this.handleSearchingTagValue}
                                />
                            </div>
                            <div className="col-12 col-md-7 offset-md-2 float-center" id="listOfStudents">
                                <StudentsList children={studentsToArray()}/>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/new" >
                    <div className="container-fluid float-center">
                        <AddStudent appendStudent={this.appendStudent}/>
                    </div>
                </Route>
            </Switch>
        );
    }

}

export default Main