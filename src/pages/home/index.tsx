import { useState } from "react";
import { useGet } from "../../hooks/useGet"
import UserCard from "./components/userCard";
import { UsersResponse } from "./interfaces/usersResponse";
import styled from "styled-components";
import Button, { ButtonType } from "../../components/button";

const Index = () => {
  const [since, setSince] = useState(0);
  const [page, setPage] = useState(1);
  const usersData = useGet<UsersResponse>(`users?since=${since}&per_page=32`);

  const handleNext = () => {
    if(usersData) {
      setSince(usersData[usersData.length - 1].id);
      setPage(old => old + 1);
      window.scrollTo(0, 0);
    }
  }
  
  if(!usersData) return <div>Cargando...</div>;
  return (
    <>
    <p>Página {page}</p>
    <CardsContainer>
    {
      usersData.map(user => (
        <UserCard key={user.id} user={user} />
      ))
    }
    </CardsContainer>
    <Button 
      type={ButtonType.primary} 
      onClick={handleNext}
    >Siguiente página</Button>
    </>
  )
}

export default Index

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 48px;
  column-gap: 32px;
`;