import styled from "styled-components";
import { useVTNavigate } from "../hooks/useVTNavigate";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: Props) => {
  const navigate = useVTNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleHome = () => {
    navigate("");
  }

  return (
    <Main>
      <h1 onClick={handleHome}>
        <i className="fa-brands fa-github"></i>
        GitHub Users
      </h1>
      {children}
    </Main>
  )
}

export default Layout

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 40px;
  & > h1 {
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
  }
`;