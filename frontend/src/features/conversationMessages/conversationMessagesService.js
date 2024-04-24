import axios from "axios";

const API_URL = "/api/messages/";

const getConversationMessagesFromBackend = async (userData) => {
  const respone = await axios.get(
    API_URL + "conversation/" + userData.conversationId,
    { headers: { Authorization: "Bearer " + userData.user.token } }
  );

  if (respone.data) {
    return respone.data;
  }

  return respone.data;
};

const conversationMessageService = {
  getConversationMessagesFromBackend,
};

export default conversationMessageService;
