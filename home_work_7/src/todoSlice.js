import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodoData = createAsyncThunk(
  'todos/fetchTodoData',
  async () => {
    const response = await fetch('https://64fdb2d8596493f7af7e766e.mockapi.io/todo');
    return response.json();
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodoData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTodoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTodoData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
