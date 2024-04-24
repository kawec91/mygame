import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messagesService from "./messagesService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  conversations: [],
  selectedConversation: "",
  conversationMessages: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getConversationsList = createAsyncThunk(
  "messages/conversationsList",
  async (user, thunkAPI) => {
    try {
      return await messagesService.getConversationsListFromBackend(user);
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

export const getConversationMessages = createAsyncThunk(
  "messages/conversationMessages",
  async (userState, thunkAPI) => {
    try {
      return await messagesService.getConversationMessagesFromBackend(
        userState
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

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    resetConversations: (state) => {
      state.selectedConversation = "";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversationsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConversationsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.conversations = action.payload;
      })
      .addCase(getConversationsList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.conversations = [];
      })
      .addCase(getConversationMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConversationMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.selectedConversation = "";
        state.conversationMessages = [];
      })
      .addCase(getConversationMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.conversationMessages = action.payload;
      });
  },
});

export const { resetConversations, setSelectedConversation } =
  messagesSlice.actions;
export default messagesSlice.reducer;
