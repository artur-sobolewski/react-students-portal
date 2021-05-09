import { Component } from 'react';
import './StudentInfoPane.css';
import MyModal from './Modal'

class StudentInfoPane extends Component {

    state = {
        student: this.props.studentInfo,
        show: false,
    }

    togglePop = () => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        const listToRender = this.state.student.tags.map((tag, index) => (
            <li key={index + 10} style={{display: "inline"}}>{tag} </li>
        ));
        return (
            <>
                <div className="panel container-fluid m-3 pane-text-type">
                    <div className="row">
                        <div className="col-12 col-sm-3">
                            <img className="img-fluid photo photo-border"
                                src={this.state.student.photoSrc} alt="Profile"
                            />
                        </div>
                        <div className="col-12 col-sm-7 container-fluid">
                            <div className="col-12">
                                <div className="row col-12">
                                    <h5>{this.state.student.name} {this.state.student.surname}</h5>
                                </div>
                                <div className="row col-12">
                                    <h6>Description:</h6><div class="w-100"></div>
                                    <p className="text-justify">{this.state.student.description}</p>
                                </div>
                                <div className="row col-12">
                                    <h6>Tags:</h6>
                                    <ul>
                                        {listToRender}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12 col-md-2 message-box">
                            <button className="btn edit-button" onClick={this.togglePop}>Edit</button>
                        </div>
                    </div>

                </div>
                <MyModal
                    show={this.state.show}
                    onHide={this.togglePop}
                    curStudent={this.state.student}
                />
            </>
        );
    }
}
export default StudentInfoPane;