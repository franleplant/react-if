import React, { Component } from 'react';
import If from './If'




//function If(condition, Comp1, Comp2) {
  //return class HOC extends Component {
    //render() {
      //let content;

      //if (condition) {
        //content = <Comp1 {...this.props} />
      //} else {
        //content = Comp2 ? <Comp2 {...this.props} /> : null
      //}


      //return content;
    //}
  //}
//}



class ExampleComponent extends Component {
  render() {
    return <p>{this.props.name}</p>
  }
}

class Positive extends Component {
  render() {
    const name = "fran"
    return (
      <div>
        <If cond={name} then={ExampleComponent} name={name}/>
        <If cond={name} then={<p>Element test</p>}/>
        <If cond={name} then={_ => <p>Element test {name.indexOf('r')}</p>}/>
      </div>
    );
  }
}

class Negative extends Component {
  render() {
    const name = null;
    return (
      <div>
        <If cond={name} then={ExampleComponent} name={name}/>
        <If cond={name} then={<p>Element test</p>}/>
        <If cond={name} then={_ => <p>Element test {name.indexOf('r')}</p>}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h2>name exists</h2>
        <Positive/>

        <h2>name does not exists</h2>
        <Negative/>
      </div>
    );
  }
}

export default App;
