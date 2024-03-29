import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
// } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { useToast } from "@chakra-ui/toast";
// import ChatLoading from "../ChatLoading";
// import { Spinner } from "@chakra-ui/spinner";
// import ProfileModal from "./ProfileModal";
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
// import { getSender } from "../../config/ChatLogics";
// import UserListItem from "../userAvatar/UserListItem";
// import { ChatState } from "../../Context/ChatProvider";
import { useNavigate } from 'react-router-dom';


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const navigate = useNavigate();

  const { user }= ChatState();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/")
  }

  return (
    <>
      <Box
      style={
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }
      }
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
     <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
      </Tooltip>

        <Text fontSize={"2xl"} fontFamily={"Work sans"}>
          GapChap
        </Text>
       <div>
       <Menu>
            <MenuButton p={1}>
                <BellIcon />
            </MenuButton>
            {/* <MenuList></MenuList> */}
        </Menu>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p={1}>
              <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic}/>
            </MenuButton>
            <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
        </Menu>
       </div>
      </Box>
    </>
  )
}

export default SideDrawer