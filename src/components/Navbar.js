import React, { useState, useEffect,forwardRef, useRef, useImperativeHandle  } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import Planet from "./PlanetDesign/Planet";
import { IconContext } from "react-icons/lib";
import { Scrollbars } from 'react-custom-scrollbars';

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
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
  border-right: 1px solid #dbdbdb;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar =forwardRef((props, ref) => {
  // const navbar = document.querySelector(".nav-fixed");
  // window.onscroll = () => {
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("nav-active");
  //   } else {
  //     navbar.classList.remove("nav-active");
  //   }
  // };

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar)
  };

  useImperativeHandle(ref, () => ({

    getAlert() {
      setSidebar(false)
    }

  }));

  function conditionCheck() {
    let x = window.innerWidth <= 768;
    if (!x) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }

  useEffect(() => {
    conditionCheck();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="md:hidden block">
          <Nav className="max-w-sm">
            {/* style={{position:'fixed'}} */}
             <NavIcon to='#'>
             <i class="fa-solid fa-burger"  onClick={showSidebar}></i>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
          </NavIcon>
          </Nav>
        </div>
        <div className="customScrollbar">
        <SidebarNav className="md:sticky fixed" sidebar={sidebar} style={{ overflowY: "auto" }}>
          <SidebarWrap >
            <div className="z-50 absolute top-0 right-0 mr-5">
            <NavIcon  to='#'>
            <i class="fa-solid fa-xmark md:hidden block" onClick={showSidebar}></i>
              {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
            </NavIcon>
            </div>
              <Link className="z-10"
                to="/"
                style={{color:"#16a086"}}
              >
                <Planet></Planet>
              </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu condition = {conditionCheck} item={item} key={index} track={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
});

export default Navbar;
