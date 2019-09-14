import {useReducer, useEffect} from 'react';

const ACTION_KEY_RIGHT = 'key:right';
const ACTION_KEY_LEFT = 'key:left';
const ACTION_KEY_UP = 'key:up';
const ACTION_KEY_DOWN = 'key:down';

const keyRight = () => ({type: ACTION_KEY_RIGHT})
const keyLeft = () => ({type: ACTION_KEY_LEFT})
const keyUp = () => ({type: ACTION_KEY_UP})
const keyDown = () => ({type: ACTION_KEY_DOWN})

const keysReducer = (state, action) => {
  switch (action.type) {
    case ACTION_KEY_LEFT:
      return { ...state, posX: state.posX + 1 }
    case ACTION_KEY_RIGHT:
      return { ...state, posX: state.posX - 1 }
    case ACTION_KEY_UP:
      return { ...state, posZ: state.posZ + 1 }
    case ACTION_KEY_DOWN:
      return { ...state, posZ: state.posZ - 1 }
    default:
      return state;
  }
};

const useKeys = (posX, posY, posZ) => {
  const keysInitialState = {posX, posY, posZ};
  const [state, dispatch] = useReducer(keysReducer, keysInitialState);

  useEffect(() => {
    window.onkeypress = (ev) => {
      switch (ev.key) {
        case 'a':
          dispatch(keyLeft());
          break;
        case 'd':
          dispatch(keyRight());
          break;
        case 'w':
          dispatch(keyUp());
          break;
        case 's':
          dispatch(keyDown());
          break;
        default:
          break;
      }
    };

    window.document.onclick = (ev) => {
      const w = document.body.clientWidth;
      const h = document.body.clientHeight;
      console.log(ev.clientX, ev.clientY, w, h)
      if (ev.clientX > 3 * w / 4) {
          dispatch(keyRight());
          return;
      }
      if (ev.clientX < w / 4) {
          dispatch(keyLeft());
          return;
      }
      if (ev.clientY > 3 *h / 4) {
          dispatch(keyDown());
          return;
      }
      if (ev.clientY < h / 4) {
          dispatch(keyUp());
          return;
      }
    }
  });

  return state;
};

export default useKeys;
