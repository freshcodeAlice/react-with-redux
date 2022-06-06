import './App.css';
import { connect } from 'react-redux';
import { increment, decrement, changeStep } from './actions/actionCreators';

const App = props => {
  const { count, step } = props;

  const inc = () => {
    props.increment();
  };

  const dec = () => {
    props.decrement();
  };

  const handlerInput = ({ target: { value } }) => {
    props.changeStep(Number(value));
  };

  return (
    <div className='App'>
      <h1>{count}</h1>
      <input type='number' value={step} onChange={handlerInput} />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
    step: state.step
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  changeStep
};

/*
const mapDispatchToProps = () => {
return {
 increment: () => dispatch(increment),
decrement: () => dispatch(decrement)
changeStep: () => dispatch(changeStep)
}
};

*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
