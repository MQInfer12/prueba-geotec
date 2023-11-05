import styled from 'styled-components'
import { Repositorie } from '../interfaces/repositories'
import { colors } from '../../../constants/colors'

interface Props {
  repos: Repositorie
}

const RepositorieCard = ({ repos }: Props) => {
  return (
    <Container>
      <div className='info'>
        <a href={repos.html_url} target='_blank'>
          <i className="fa-solid fa-book"></i>
          {repos.full_name}
        </a>
        {repos.description && <p className='description'>{repos.description}</p>}
      </div>
      <div className='counts'>
        <p>
          <i className="fa-regular fa-circle-xmark"></i>
          Issues: {repos.open_issues_count}
        </p>
        <p>
          <i className="fa-solid fa-code-fork"></i>
          Forks: {repos.forks_count}
        </p>
        <p>
          <i className="fa-regular fa-eye"></i>
          Observadores: {repos.watchers_count}
        </p>
      </div>
    </Container>
  )
}

export default RepositorieCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: ${colors.black};
  border-radius: 16px;
  color: ${colors.white};
  width: 320px;
  box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.2);
  justify-content: space-between;
  gap: 16px;
  height: 255px;

  & > .info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & > a {
      color: ${colors.primary500};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 0.3s;
      & > i {
        text-decoration: none;
        margin-right: 8px;
      }
      &:hover {
        opacity: 0.6  ;
      }
    }
    & > .description {
      opacity: 0.6;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  & > .counts {
    display: flex;
    flex-direction: column;
    gap: 8px;
    & > p {
      display: flex;
      gap: 8px;
      align-items: center;
      & > i {
        width: 24px;
      }
    }
  }
`;