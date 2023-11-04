import { useNavigate } from "react-router-dom";
import Button, { ButtonType } from "../../../components/button";
import ProfileImg from "../../../components/profileImg";
import { colors } from "../../../constants/colors";
import { goTo } from "../../../utilities/goTo";
import { UserData } from "../interfaces/usersResponse"
import styled from 'styled-components';

interface Props {
  user: UserData
}

const UserCard = ({ user }: Props) => {
  const navigate = useNavigate();

  const handleGoToUser = () => {
    if(document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(`/${user.id}`);
      })
    } else {
      navigate(`/${user.id}`);
    }
  }

  return (
    <Container>
      <div>
        <ProfileImg 
          id={user.id}
          url={user.avatar_url}
          size={96}
        />
        <h2>{user.login}</h2>
        <div className="buttons">
          <Button 
            type={ButtonType.secondary} 
            onClick={() => goTo(user.html_url)}
            icon={"fa-brands fa-github"}
          >Ir a GitHub</Button>
          <Button 
            type={ButtonType.primary} 
            onClick={handleGoToUser}
            icon={"fa-solid fa-arrow-right"}
          >Ver repositorios</Button>
        </div>
      </div>
    </Container>
  )
}

export default UserCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  & > div {
    position: relative;
    background-color: ${colors.black};
    border-radius: 16px;
    box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.2);
    color: ${colors.white};
    padding: 56px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 250px;
    align-items: center;
    & > img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & > h2 {
      font-weight: 400;
    }
    & > .buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;