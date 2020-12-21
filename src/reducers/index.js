import number from './number';
import color from './color';

import { combineReducers } from 'redux';

/*
    서브 리듀서들을 하나로 합친다.
    combineReducers 를 실행하고 나면,
    나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
   
    지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어진다.
*/

// 여러개의 서브리듀서를 하나로 합쳐준다.
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;