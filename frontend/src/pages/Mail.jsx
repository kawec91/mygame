import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getConversationsList, resetConversations } from '../features/messages/messagesSlice';
import { toast } from 'react-toastify';
import Conversation from '../components/Conversation/Conversation';

function Mail() {
  const dispatch = useDispatch();

  //const myUser = useSelector((state) => state.auth)
  const { user,conversations, isLoading, isError, isSuccess, message } = useSelector(
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
      {conversations.map((conversation) => <Conversation key={conversation._id} conversation={conversation} />)}
    </div>
  )
}

export default Mail