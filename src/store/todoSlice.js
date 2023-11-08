
import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
  items : [{
    id:1,
    title:'Hello world',
    complete: false,
  }],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers : {
    addTodo : (state, action) => {
      const todo = {
        id:nanoid(),
        title:action.payload,
        complete: false,
      }
      state.items.unshift(todo);
    },
    removeTodo : (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateTodo : (state, action) => {
      state.items.map(item => {
        if(item.id === action.payload.id){
          item.title = action.payload.title;
        }
      })
    },
    completeTodo : (state, action) => {
      state.items.map(item => {
        if(item.id === action.payload){
          item.complete = item.complete ? false : true;
        }
      })
    },

  }
});

export const {addTodo, removeTodo, updateTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;