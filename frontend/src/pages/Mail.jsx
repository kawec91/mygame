import React from 'react';
import ConversationsList from '../components/ConversationsList/ConversationsList';
import ConversationMessages from '../components/ConversationMessages/ConversationMessages';

function Mail() {
  return (
    <div className='flex p-2 w-full'>
      <ConversationsList />
      <div>
        <ConversationMessages />
      </div>
    </div>
  )
}

export default Mail