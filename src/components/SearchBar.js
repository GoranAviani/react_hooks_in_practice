import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [state, setState] = useState('')


  const onInputChange = event => {
    setState({ term: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(state.term);
  };


    return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
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
