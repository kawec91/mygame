import React from 'react';
import ConversationsList from '../components/ConversationsList/ConversationsList';
import ConversationMessages from '../components/ConversationMessages/ConversationMessages';
import StandardButton from '../components/StandardButton/StandardButton';

function Mail() {
  return (
    <div className='flex w-full'>
      <ConversationsList />
      <div className='p-2'>
        <ConversationMessages />
        <div>
          <input type='text' placeholder='Message'/>
          <StandardButton text={'Send'} type={'btn'} next={()=>{}} />
        </div>
      </div>
    </div>
  )
}

export default Mail