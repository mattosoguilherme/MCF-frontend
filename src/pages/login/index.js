import styled from "styled-components";

const H1s = styled.h1`
  font-family: "Reenie Beanie", cursive;
  text-align: center;
  @media(max-width:420px){
    color:white;
    font-size:2.5rem;
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

  @media(max-width:420px){
    background-color:black;
  }
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 30rem;
  align-self: center;
  background-color: black;
  padding:2rem 0.7rem 2rem 0.7rem;
  border-radius:2rem;
  @media(max-width:420px){
    width:100%;
  }
  
  input{
    margin:0 0 0.7rem 0;
  }
  button{
   width:8rem;
   align-self:center;

  }
`;

const Login = () => {
  return (
    <>
      <ContainerS>
        <H1s> Ministério Casa da Família </H1s>

        <FormLogin>
          <input />
          <input />
          <button> Entrar </button>
        </FormLogin>
      </ContainerS>
    </>
  );
};

export default Login;
