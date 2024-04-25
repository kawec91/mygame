import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectOption } from "../../features/conversations/conversationsSlice";
import conversationMessageService from "../../features/conversationMessages/conversationMessagesService";

const initialState = {
  messages: null,
  isLoading: false,
  isError: false,
  isSucces: false,
  message: "",
};

const conversationMessageSlice = createSlice({
  initialState,
  name: "conversationMessages",
  reducers: {
    resetMessages: (state) => {
      state.messages = [];
      state.isLoading = false;
      state.isError = false;
      state.isSucces = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversationMessagesById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConversationMessagesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
        state.isSucces = true;
      })
      .addCase(getConversationMessagesById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const getConversationMessagesById = createAsyncThunk(
  "conversationMessages/getMessagesById",
  async (conversationId, thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userData = { user: user, conversationId: conversationId };
      thunkAPI.dispatch(selectOption(conversationId));
      return await conversationMessageService.getConversationMessagesFromBackend(
        userData
      );
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
export const sendMessage = createAsyncThunk(
  "conversationMessages/sendMessage",
  async (messageData, thunkAPI) => {
    try {
      return await conversationMessageService.sendConversationMessageToBackend(
        messageData
      );
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

export const { resetMessages } = conversationMessageSlice.actions;

export default conversationMessageSlice.reducer;
