import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'




function App() {
  return (
    <div>
      <Counter />

    </div>
    )
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps =(dispatch)=>{return ({
  increment: ()=> dispatch({type:"INCREMENT"}),
  decrement: ()=> dispatch({type:"DECREMENT"})


})};

export default connect(mapStateToProps,mapDispatchToProps)(App);
