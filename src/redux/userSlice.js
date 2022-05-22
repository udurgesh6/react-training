import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, name: "Durgesh", age: 23 }],
  reducers: {
    addUser: (state, action) => {
      const pro = {
        id: action.payload.id,
        name: action.payload.name,
        age: action.payload.age,
      };
      return [...state, pro];
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
