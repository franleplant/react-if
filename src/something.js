import React, { Component } from 'react';




class Puppy extends Component {
  render() {
    const { puppyName } = this.props.params;

    // You get this through Redux by mapping `puppyName` to a `puppy` object
    const { puppy } = this.props;

    return (
      <div>
        <h1>{puppy.name}</h1>
        <img src={puppy.img} />


        <Match pattern="/pup/:name/edit" component={EditPuppy} puppy={puppy}/>
      </div>
    );
  }
}


function EditPuppy({puppy}) {
  // The actual content of the EditPuppt is not important, but
  // you can assume that we need the puppy object to fill the initial state
  // of the form
  return <PuppyForm puppy={puppy} />
}
