import React, {Component} from "react";
import './style.css';

class SearchBar extends Component {
    state = {
      focused: false
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    focus = () => {
        this.setState((state) => ({ focused: !state.focused }))
    }
    render() {
        return (
            <div className="searchbar_container">
                <input ref={input => this.input = input}
                    style={{margin: '10px'}}
                    placeholder={'search..'}
                    className={['input', this.state.focused && 'input-focused'].join(' ')}
                />
            </div>
        );
    }
}
export default SearchBar;