import { Component, Children } from 'react';

class StudentsList extends Component {

    render() {
        let count = 0;
        const renderStudentsList = Children.map(Children.toArray(this.props.children), child => {
            if (child !== null) {
                count++;
                return (
                    <>{child}</>
                );
            }
        });
        return (
            <>
                <div className="container-fluid col-12 m-3 ">
                    <div className=" col-12 panel pane-text-type align-content-center">
                        <h5>Found {count} results.</h5>
                    </div>
                </div>
                {renderStudentsList}
            </>
        );
    }
}
export default StudentsList;