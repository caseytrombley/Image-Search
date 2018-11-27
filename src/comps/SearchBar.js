import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        term: '',
        placeholder: 'Search'
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    funny() {
        if(this.state.term.length !== 0) {
            const t = this.state.term.charAt(0).toUpperCase() + this.state.term.slice(1);
            return <span style={{marginLeft: 5}}>You're searching for: <span style={{marginLeft: 5}} className="ui label violet">{t}</span></span>
        }
    }

    render() {
        const t = this.state.term.charAt(0).toUpperCase() + this.state.term.slice(1);

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        {/*<label>Image Search</label>*/}
                        <input
                            className="inline"
                            placeholder={this.state.placeholder}
                            type="text"
                            value={t}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />

                    </div>
                    <button type="submit" className="ui submit button inline">Submit</button>
                    {this.funny()}
                </form>
            </div>
        );
    }
}

export default SearchBar;