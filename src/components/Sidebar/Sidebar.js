import React, { useContext } from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import { UserContext } from "../../App";

function Sidebar() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalOutlinedIcon}
        title="COVID-19 Information center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Learn More" />
    </div>
  );
}

export default Sidebar;
