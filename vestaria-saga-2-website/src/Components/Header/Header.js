import React from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FcAbout } from "react-icons/fc";
import { GrOverview } from "react-icons/gr"
import { TbBook2 } from "react-icons/tb";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>Vestaria Saga 2</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<GrOverview />}>
                Guide Overview
              </MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 1</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 2</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 3</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 4</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 5</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 6</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 7</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 8</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 9</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 10</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 11</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 12</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 13</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 14</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 15</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 16</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 17</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 18</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 19</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 20</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 21</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 22</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 23</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 24</MenuItem>
              <MenuItem icon={<TbBook2 />}>Chapter 25</MenuItem>                                    
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FcAbout />}>About</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;