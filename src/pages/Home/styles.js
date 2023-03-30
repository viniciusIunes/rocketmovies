import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`


  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 123px;
  
  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > button {
    width: 207px;
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 64px 64px 0;
`

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;
`

export const NewFilm = styled(Link)`

  width: 207px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500; 


  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
    width: 24px;
    height: 24px;

  }
`
