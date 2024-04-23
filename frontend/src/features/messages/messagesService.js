import axios from "axios";

const API_URL = "/api/messages/";

const getConversationsListFromBackend = async (userData) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: "Bearer " + userData.token },
  });

  if (response.data) {
    return response.data;
  }
  return response.data;
};

const messagesService = { getConversationsListFromBackend };

export default messagesService;
