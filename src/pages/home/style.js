import styled from 'styled-components'

export const Container = styled.div`


h1{
    text-align: center;
    justify-content: center;
    margin: 4rem 0 ;
  }
  
` 

export const MovieList = styled.ul `
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
column-gap: 3rem;
row-gap: 4rem;

`

export const Movie = styled.li`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    width: 280px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  span{
    font-weight: bold;
    font-size:120%;
  }
  a{
    transition: all 2;
  }
  
  a:hover{
    transform: scale(1.1);
  }
`