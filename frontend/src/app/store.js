import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import conversationsReducer from "../features/conversations/conversationsSlice";
import conversationMessagesReducer from "../features/conversationMessages/conversationMessagesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversationMenu: conversationsReducer,
    conversationMessages: conversationMessagesReducer,
  },
});
