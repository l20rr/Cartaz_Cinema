import styled from "styled-components";

export const Container = styled.div`
body{
    overflow-y: hidden;
}

margin-top: 10px; 
h1{
    margin: 3rem;
  }
  
  .movie{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img{
    width: 400px;
    border-radius: 1rem;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button{
    border: none;
    cursor: pointer;
    border-radius:1rem ;
    font-size: 100%;
    padding: 1rem;
    margin-top: 1rem;
    width: 150px;
  }
  
button:hover{
    background-color: rgb(216, 216, 216);
  }
  
span{
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 120%;
  }

  .release-date{
    opacity: 0.5;
  }
` 