import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setState] = useState('')


  const onInputChange = event => {
    setState(event.target.value );
  };

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  };


    return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );

}

export default SearchBar;
