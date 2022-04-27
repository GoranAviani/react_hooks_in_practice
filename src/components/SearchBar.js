import React, {useState} from 'react';

const SearchBar = (props) => {
    const [state, setState] = useState({term:''})


  const onInputChange = event => {
    setState({ term: event.target.value });
  };

  const onFormSubmit = event => {
    event.preventDefault();

    props.onFormSubmit(state.term);
  };


    return (
      <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={state.term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );

}

export default SearchBar;
