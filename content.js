import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Импорт useSelector и useDispatch из react-redux
import { increment, decrement } from './redux/actions'; // Импорт действий

const Content = () => {
  const { id } = useParams();
  const count = useSelector(state => state.count); //состояние из Redux store
  const dispatch = useDispatch(); // dispatch из React-Redux

  return (
    <div>
      <h2>Lab Content {id}</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Content;
