import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  margin-right:100px;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  border-right:1px solid #DBDBDB;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar = () => {
  const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='sticky top-0 shadow-md md:hidden block'>
        <Nav className='w-full'>
        {/* style={{position:'fixed'}} */}
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        </div>
        
        <div className='md:fixed nav-fixed w-full md:block hidden'>
        <Nav>
        {/* style={{position:'fixed'}} */}
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        </div>
        <SidebarNav sidebar={sidebar} style={{overflowY:"auto"}}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <Link to="/" style={{marginLeft:"16px",padding:"20px"}} class="text-2xl font-bold text-indigo-700">Venus </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;