import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types/user';

export const initialState: User = {};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const user = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return {...action.payload};
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      const newState = {
        ...state,
        ...action.payload,
      };

      return newState;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const {setUser, updateUser} = user.actions;
export default user.reducer;
