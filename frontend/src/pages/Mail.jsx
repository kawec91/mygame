import React, { useEffect } from 'react';
import ConversationsList from '../components/ConversationsList/ConversationsList';
import ConversationMessages from '../components/ConversationMessages/ConversationMessages';
import { useDispatch, useSelector } from 'react-redux';
import ConversationInputArea from '../components/ConversationInputArea/ConversationInputArea';
import ConversationNoChosen from '../components/ConversationNoChosen/ConversationNoChosen';
import { defaultSelect } from '../features/conversations/conversationsSlice';

function Mail() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.conversationMenu.selected);

  useEffect(()=>{
   dispatch(defaultSelect("0"));
  }, [dispatch]);
  return (
    <div className='flex w-full'>
      <ConversationsList />
      <div className='p-2 flex flex-col gap-2 w-full'>
        {selected !== "0" ? <ConversationMessages /> : <ConversationNoChosen />}
        {selected !== "0" ? <ConversationInputArea /> : <></>}
      </div>
    </div>
  )
}

export default Mail