import React, { Component, PropTypes } from 'react'

const TestFlash = ({showGrowlerSuccess, showGrowlerError}) => {
  const contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  const someHandler = () => this.context.router.push('/love').bind(this)

  return (
    <section>
      {console.log("my this:"+this)} 
      <button onClick={ evt => {evt.preventDefault(); someHandler();}}>Success message with no key</button>
      <button onClick={ evt => {evt.preventDefault(); showGrowlerSuccess('Success with no key');} }>Success message with no key</button>
      <button onClick={ evt => {evt.preventDefault(); showGrowlerError('error');} }>Error message with key</button>
    </section>
  );
};
export default TestFlash;