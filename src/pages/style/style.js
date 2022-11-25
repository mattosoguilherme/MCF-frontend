import styled from "styled-components";

export const H1s = styled.h1`
  font-family: "Reenie Beanie", cursive;
  text-align: center;
  @media (max-width: 420px) {
    color: white;
    font-size: 2.5rem;
  }
`;

const ContainerS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  height: 100vh;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 420px) {
    background-color: black;
  }
`;

export const ContainerHome = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 420px) {
    background-color: black;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  align-self: center;
  background-color: black;
  padding: 2rem 0.7rem 2rem 0.7rem;
  border-radius: 2rem;
  @media (max-width: 420px) {
    width: 100%;
  }

  input {
    background-color: transparent !important;
  }

  label{
    color:white; !important
  }
  button {
    margin-top:1.5rem ;
    width: 10rem;
    height: 3rem;
    align-self: center;
  }
`;

export const MenuS = styled.div`
  padding: 5rem;
  width: 50rem;
  display: flex;
  justify-content: space-evenly;
  align-self:center;

  @media (max-width: 420px) {
    width: 50%;
    height:40rem;
    flex-direction: column;
    padding: 0;
    align-items: center;
    margin:0;
    padding:0;
  }

  button {
    margin:0; 
    width: 8rem;
    height: 8rem;
    border-radius: 20px;
    background-color: black;
    color: white;
    box-shadow: 1px 1px 20px 1px;
  }


`;

export const FormCadS = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 30rem;
align-self: center;
background-color: black;
padding: 2rem 0.7rem 2rem 0.7rem;
border-radius: 2rem;
@media (max-width: 420px) {
  width: 100%;
}

input {
  background-color: transparent !important;
}

`

export default ContainerS;
