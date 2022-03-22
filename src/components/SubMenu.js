import React, { useState } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import "../App.css"

const SidebarLink = styled(NavLink)`
  display: flex;
  color:black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #16a086;
    cursor: pointer;
  }
`;
// background: #252831;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;
// background: #632ce4;
// background: #414757;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {setSubnav(!subnav)};

  let location = useLocation();

  return (
    <>
      <SidebarLink activeClassName="active" className="hover:bg-gray-200" smooth to={item.path} onClick={item.subNav && showSubnav}>
        <div className='flex'>
          {/* {item.icon} */}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {/* {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink className="hover:bg-gray-200 transition duration-500 ease-in-out" smooth to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })} */}

        <div className={`${subnav ? "animation" : "animationHidden"}`}>
        {
        item.subNav.map((item, index) => {
          return (
            // className="hover:bg-gray-200"
            <DropdownLink className={`${location.pathname}${location.hash}` === item.path ? "bg-gray-200" : "hover:bg-gray-200"} smooth to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
        </div>
    </>
  );
};

export default SubMenu;