import { useParams } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import { User } from "./interfaces/user";
import ProfileImg from "../../components/profileImg";
import styled from "styled-components";
import Button, { ButtonType } from "../../components/button";
import { goTo } from "../../utilities/goTo";
import Repositories from "./components/repositories";
import { http } from "../../constants/http";
import { maxRepos } from "../../constants/maxRepos";

const Index = () => {
  const { id } = useParams();
  const userData = useGet<User>(`user/${id}`);

  if(!userData) return <div>Cargando...</div>;
  return (
    <Container>
      <p>{userData.login}</p>
      <DataContainer>
        <ProfileImg 
          id={userData.id}
          url={userData.avatar_url}
          size={320}
        />
        <div>
          {userData.name && <h2>{userData.name}</h2>} 
          {userData.email && <p className="email">{userData.email}</p>}
          { 
            userData.location &&
            <p className="location">
              <i className="fa-solid fa-location-dot"></i>
              {userData.location}
            </p>
          }
          <Button 
            type={ButtonType.primary}
            onClick={() => goTo(userData.html_url)}
            icon="fa-brands fa-github"
          >Ir a GitHub</Button>
          <p className="repositories email">{userData.public_repos} repositorios</p>
          <p className="email">{userData.followers} seguidores</p>
        </div>
      </DataContainer>
      <Repositories 
        url={userData.repos_url.replace(http, "")} 
        max={Math.ceil(userData.public_repos / maxRepos)}
      />
    </Container>
  )
}

export default Index

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    min-width: 320px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 759px) {
      align-items: center;
    }

    & > h2 {
      font-size: 2.2rem;
      font-weight: 400;
    }
    & > .email {
      opacity: 0.6;
    }
    & > .location {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    & > button {
      width: max-content;
    }
    & > .repositories {
      margin-top: 24px;
    }
  }
`;