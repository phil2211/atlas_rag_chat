'use client'
import { Suspense } from 'react'
import { Flex } from '@radix-ui/themes'
import { Chat, ChatContext, ChatSideBar, PersonaPanel, useChatHook } from '../components'
import { useRealmApp } from '../lib/useRealmApp';
import PersonaModal from './PersonaModal'

const ChatProvider = () => {
  const provider = useChatHook()

  return (
    <ChatContext.Provider value={provider}>
      <Flex style={{ height: 'calc(100% - 56px)' }} className="relative">
        <ChatSideBar />
        <div className="flex-1 relative">
          <Chat ref={provider.chatRef} />
          <PersonaPanel />
        </div>
      </Flex>
      <PersonaModal />
    </ChatContext.Provider>
  )
}


const RagApp = () => {
  const app = useRealmApp();
  const handleLogout = async () => {
    try {
        await app.logOut();
    } catch (e) {
        console.error("error logging out");
    }
};

  return (
      <Suspense>
        <ChatProvider />
      </Suspense>
  );
};

export default RagApp;
