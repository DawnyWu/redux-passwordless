import React, { Component, PropTypes } from 'react'

const TestFlash = ({showGrowlerSuccess, showGrowlerError}) => {

  return (
    <section  >
      <button onClick={ evt => {evt.preventDefault(); showGrowlerSuccess('Success with no key');} }>Success message with no key</button>
      <button onClick={ evt => {evt.preventDefault(); showGrowlerError('error');} }>Error message with key</button>
    </section>
  );
};

export default TestFlash;