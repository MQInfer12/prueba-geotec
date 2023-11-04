import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: Props) => {
  return (
    <Main>
      <h1>
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
  }
`;