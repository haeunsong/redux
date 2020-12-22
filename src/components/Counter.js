import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      // CounterList에서 전달한 index를 각 이벤트가 실행될때
      // 함수의 파라미터로 넣어서 실행하게 해준다.
      onClick={() => onIncrement(index)}
      onContextMenu={ // 우클릭시 메뉴가 열리는 이벤트
        (e) => {
          e.preventDefault(); // 우클릭해도 메뉴가 열리지 않음.
          onDecrement(index);
        }
      }
      onDoubleClick={() => onSetColor(index)}
      style={{ backgroundColor: color }}>
      {number}
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func

}

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
}
export default Counter;