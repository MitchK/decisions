import React from 'react';

const AddDecision = props => (
  <div>
    <h1>Add Decision</h1>
    <form>
      <label for="text">Text</label>
      <input type="text" name="text" id="text"></input>
      <button value="save">Save</button>
    </form>
  </div>
);

export default AddDecision;
