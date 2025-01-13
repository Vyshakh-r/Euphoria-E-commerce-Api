import React, { useState, useEffect } from "react";
import styled from "styled-components";
import close from "../../assets/images/close.svg";
import menubar from "../../assets/images/menu-bar.svg";
import LoginForm from "./LoginForm";

const Header = () => {
  const [profile,setProfile]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken !== token) {
      setToken(storedToken); 
    }
  }, [token]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  
  
  

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); // Clear token from localStorage and immediately clear the state
  };

  return (
    <>
      <Wrapper>
        <Headers>
          <LogoContainer>
            <Logo
              src={require("../../assets/images/Logo.svg").default}
              alt="logo"
            />
          </LogoContainer>
          <Categories>
            <Items>Shop</Items>
            <Items>Men</Items>
            <Items>Women</Items>
            <Items>Combos</Items>
            <Items>Joggers</Items>
          </Categories>
          <RightDiv>
            <Form>
              <SearchContainer>
                <SearchImgContainer>
                  <SearchImage
                    src={require("../../assets/images/search.svg").default}
                    alt="Search Icon"
                  />
                </SearchImgContainer>
                <StyledInput type="text" placeholder="Search" />
              </SearchContainer>
            </Form>
            <RightContainer>
              <ImageContainer>
                <Wishlist
                  src={require("../../assets/images/wishlist.svg" ).default}
                  alt="Wishlist Icon"
                />
              </ImageContainer>
              <ImageContainer>
                <Account 
                  style={token ? {display:'none'}: {display:'block'}}
                  src={require("../../assets/images/account.svg").default }
                  alt1="Account Icon"
                  onClick={toggleLoginForm}
                />
                  <Account
                  style={token? {display:'block'}: {display:'none'}}
                  src={require("../../assets/images/logout_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg").default }
                  alt1="Account Icon"
                  onClick={handleLogout}
                  
                />
            
              </ImageContainer>
              
                <ImageContainer>
                  <Cart src={require("../../assets/images/cart.svg").default} alt="Cart Icon" />
                </ImageContainer>
             
            </RightContainer>
          </RightDiv>
          <MenuBar>
            <Menu onClick={toggleMenu}>
              <MenuImg src={menubar} alt="menubar" />
            </Menu>
            <MenuItem className={`${isOpen ? "is-open" : ""}`}>
              <MenuList>
                <LinkItem>
                  <Status>
                    <Item>Shop</Item>
                  </Status>
                  <Status>
                    <Item>Men</Item>
                  </Status>
                  <Status>
                    <Item>Women</Item>
                  </Status>
                  <Status>
                    <Item>Combos</Item>
                  </Status>
                  <Status>
                    <Item>Joggers</Item>
                  </Status>
                  <Status>
                    <Item>Wishlist</Item>
                  </Status>
                  <Status>
                    <Item>Account</Item>
                  </Status>
                  <Status>
                    <Item>Cart</Item>
                  </Status>
                </LinkItem>
                <CloseBar onClick={toggleMenu}>
                  <Close src={close} alt="close" />
                </CloseBar>
              </MenuList>
            </MenuItem>
          </MenuBar>
        </Headers>
        {isLoginFormVisible && <LoginForm />}
      </Wrapper>
    </>
  );
};

export default Header;





const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 0;


`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;
  @media all and (max-width: 540px) {
    padding: 8px 0;
  }
`;
const LogoContainer = styled.div`
  width: 91px;
  cursor: pointer;
  @media all and (max-width: 1080px) {
    width: 70px;
  }
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media all and (max-width: 1280px) {
    gap: 20px;
  }
  @media all and (max-width: 1080px) {
    gap: 24px;
  }
  @media all and (max-width: 820px) {
    display: none;
  }
 
 
`;
const Items = styled.li`
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  color: #807d7e;
  line-height: 26.4px;
  @media all and (max-width: 1400px) {
    font-size: 15px;
  }

  @media all and (max-width: 1080px) {
    font-size: 15px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
  &:hover {
    font-weight: 700;
    color: #3c4242;
  }
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;

  @media all and (max-width: 1080px) {
    gap: 5px;
  }
`;
const Form = styled.div`
  display: flex;
  margin-right: 43px;
  @media all and (max-width: 820px) {
    margin-right:30px;
  }

`;
const SearchContainer = styled.div`
  border-radius: 8px;
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  padding: 6px 20px;
  gap: 12px;
  @media all and (max-width: 1280px) {
    
  
  }
  @media all and (max-width: 1080px) {
    gap: 0;
  }
  /* @media all and (max-width: 540px) {
    padding: 12px 50px;
  } */
  /* @media all and (max-width: 540px) {
    gap: 5px;
  } */
`;
const SearchImgContainer = styled.div`
  @media all and (max-width: 1080px) {
    width: 12px;
  }
  /* @media all and (max-width: 540px) {
    width: 17px;
  } */
`;
const SearchImage = styled.img`
  display: block;
  width: 100%;
`;
const StyledInput = styled.input`
  background-color: #F6F6F6;
  border: none;
  padding: 6px 5px;
  font-size: 14px;
  color: #807d7e;
  @media all and (max-width: 1280px) {
  
    font-size: 12px;
  }
  @media all and (max-width: 1080px) {
    width: 90px;
  }
  @media all and (max-width: 640px) {
    width: 70px;
  }
  /* @media all and (max-width: 540px) {
    width: 100%;
  } */
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media all and (max-width: 1280px) {
    gap: 1rem;
  }
  @media all and (max-width: 480px  ) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  background-color: #F6F6F6;
  cursor: pointer;
  padding: 14px;
  border-radius: 8px;
  @media all and (max-width: 1280px) {
    width: 35px;
    padding: 10px;

  }
`;
const Wishlist = styled.img`
  display: block;
  width: 100%;
`;
const Account = styled.img`
  display: block;
  width: 17px;
`;
const Cart = styled.img`
  display: block;
  width: 100%;
`;

const MenuBar = styled.div`
  display: none;
  @media all and (max-width: 820px) {
    display: block;
  }
`;
const Menu = styled.div`
  width: 100%;
`;
const MenuImg = styled.img`
  width: 100%;
  display: block;
`;
const MenuItem = styled.div`
  display: none;
  &.is-open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 9999;
  }
`;
const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LinkItem = styled.div`
  width: 70%;
`;
const Status = styled.div``;
const Item = styled.h3`
  font-size: 16px;
  margin-bottom: 28px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  &:hover {
    font-weight: 700;
  }
`;
const CloseBar = styled.div`
  width: 34px;
`;
const Close = styled.img`
  width: 100%;
  display: block;
`;