'use client';


import {useChat} from 'ai/react'

export default function Chat() { 
  const {messages, input, handleInputChange, handleSubmit} = useChat();

  return (


    <div className='chatContainer'>

      <div className='messagesContainer'>
        {messages.map(m=>(
          <div key={m.id} className={m.role === 'assistant' ? 'systemMessage' : 'userMessage'}>
            <div className='MessageContent'>{m.content}</div>
            </div>

        ))}
      </div>
      <p>Put your code here!</p>
      <form onSubmit = {handleSubmit} className="inputForm">
        <input value={input} onChange={handleInputChange} placeholder="What did you dream of...." className="inputField"/>
      </form>
    </div>
  );
}
