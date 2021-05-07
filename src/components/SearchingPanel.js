import { Component } from 'react';

class SearchingPanel extends Component{
    
    state = {
        searchedDesc: "",
        searchedTag: "",
    }

    handleDescInputChange = (event) => {
        this.setState({
            searchedDesc: event.target.value,
        });
        this.props.captureDescSearching(event.target.value)
    }

    handleTagInputChange = (event) => {
        this.setState({
            searchedTag: event.target.value,
        });
        this.props.captureTagSearching(event.target.value)
    }

    render() {
        return (
            <div className="col-12 container panel p-3">
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="descSearch" className="main-text-type">Search in description</label>
                    </div>
                    <div className="col-12">
                        <form className="form-check-inline">
                            <input className="form-control" type="search" placeholder="Description"
                                    aria-label="Description" id="descSearch" onChange={this.handleDescInputChange}/>
                        </form>
                    </div>
                
                    <div className="col-12">
                        <div className="col-12">
                            <label htmlFor="tagSearch" className="main-text-type">Search for tag</label>
                        </div>
                        <div className="col-12">
                            <form className="form-check-inline">
                                <input className="form-control" type="search" placeholder="Tag"
                                        aria-label="Tag" id="tagSearch" onChange={this.handleTagInputChange}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchingPanel;