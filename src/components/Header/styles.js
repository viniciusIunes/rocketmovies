import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
 
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  > h1 {
    display: flex;
    align-items: center;

    padding-bottom: 12px;

    color: ${({ theme }) => theme.COLORS.PINK};

  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    align-items: flex-end;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
  
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Search = styled.div`

  display: flex;
  align-items: center;
  min-width: 630px;

  > div {
    padding-left: 12px;
  }
`
