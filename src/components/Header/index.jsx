import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Search } from "./styles";
import { Input } from "../Input"






export function Header() {
  return(
    <Container>

       <h1 to='/'>RocketMovies</h1>


      <Search>
        <Input
         type="text" 
         placeholder='Pesquisar pelo título' 
        />
      </Search>

      <Profile to='/profile'>
        <div>
          <strong>Vinícius Moreira</strong>
          <span>Sair</span>
        </div>

        <img src="https://github.com/viniciusiunes.png" alt="Foto do usuário"/>
      </Profile>

    </Container>
  )
}