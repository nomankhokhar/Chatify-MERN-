import { Box } from "@chakra-ui/layout";
import ChatBox from "../components/ChatBox";
import SideDrawer from "../components/miscellanenious/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../components/MyChats";
import { useState } from "react";


const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain , setFetchAgain] = useState(false)

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;