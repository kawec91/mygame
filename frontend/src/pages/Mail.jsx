import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getConversationsList, resetConversations } from '../features/messages/messagesSlice';
import { toast } from 'react-toastify';
import Conversation from '../components/Conversation/Conversation';
import Spinner from '../components/Spinner/Spinner';
import ConversationChat from '../components/Conversation/ConversationChat';

function Mail() {
  const dispatch = useDispatch();

  //TODO:Style
  //TODO: Load Chat Component with Messages
  const { user,conversations, selectedConvestaion, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.messages
  );

  useEffect(()=>{
    if(isError){
      toast.error(message);
    }

    dispatch(getConversationsList(user));
  },[dispatch]);

 
  return (
    <div className='w-full p-2 flex'>
      <div>
        {isLoading ? <Spinner /> : conversations.map((conversation) => <Conversation key={conversation._id} conversation={conversation} />)}
      </div>
      <div>
        {selectedConvestaion === undefined ? <div>Empty</div> : <ConversationChat conversation={selectedConvestaion}/>}
      </div>
      
    </div>
  )
}

export default Mail