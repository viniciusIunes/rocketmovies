import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;


    main {


  }

  .tags {
    display:  flex;
    justify-content: flex-start;

   svg {
      stroke: ${({ theme }) => theme.COLORS.PINK};

    }
    
    > div:nth-child(1) {
      margin-right: 25px;
    }    
  }
`

export const Form = styled.form` 

  max-width: 1137px;
  margin: 130px auto;
  margin-top: 24px;
  overflow-y: auto;

  > a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      margin: 40px 0 24px 0;
      /* margin: 40px 0 0 100px; */
    }

  .inputs {
    display: flex;
    align-items: center;


    margin-bottom: 40px;
    
    > div:nth-child(1) {
      margin-right: 25px;
    }
  }


  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

  }

  .buttons {                                                     

    display: flex;     
    align-items: center;
    margin-bottom: 85px;

   
    .buttonOne {        

    background-color: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 40px;
                    
  }                 
}
`