import { Component } from 'react';
import './StudentInfoPane.css'
import message from '../images/message.png'

class StudentInfoPane extends Component {

    state = {
        student: this.props.studentInfo,
    }

    render() {
        const listToRender = this.state.student.tags.map((tag, index) => (
            <li key={index + 10} style={{display: "inline"}}>{tag} </li>
        ));
        return (
            <div className="panel container-fluid m-3 pane-text-type">
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img className="img-fluid photo photo-border"
                             src={this.state.student.photoSrc} alt="Profile picture"
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
                    <div className="col-2 message-box">
                        <img className="img-fluid message border "
                             alt="Send message icon" src={message}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentInfoPane;