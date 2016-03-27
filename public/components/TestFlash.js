import React, { Component, PropTypes } from 'react'

const TestFlash = ({showGrowlerSuccess, showGrowlerError}) => {

  return (
    <section  >
      <br /><br /><br /><br /><br />
      <h2>Redux Flash notification Example</h2>
      <br /><br /><br />
      <button onClick={ evt => {evt.preventDefault(); showGrowlerSuccess('Success with no key');} }>Success message with no key</button>
      <button onClick={ evt => {evt.preventDefault(); showGrowlerError('error');} }>Error message with key</button>
    </section>
  );
};

export default TestFlash;