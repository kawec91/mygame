import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import conversationsService from "./conversationsService";

const initialState = {
  conversationsList: null,
  selected: "0",
  isLoading: false,
  isError: false,
  isSucces: false,
  message: "",
};

const conversationsSlice = createSlice({
  initialState,
  name: "conversationMenu",
  reducers: {
    selectOption: (state, action) => {
      state.selected = action.payload;
    },
    defaultSelect: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversationsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConversationsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.conversationsList = action.payload;
      })
      .addCase(getConversationsList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const getConversationsList = createAsyncThunk(
  "conversationMenu/conversationsList",
  async (thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      return await conversationsService.getConversationsListFromBackend(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const { selectOption, defaultSelect } = conversationsSlice.actions;

export default conversationsSlice.reducer;
