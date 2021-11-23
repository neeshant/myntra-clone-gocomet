import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/filter/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="radio"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
    </form>
  );
}