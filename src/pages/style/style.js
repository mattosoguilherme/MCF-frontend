import styled from "styled-components";

export const ContainerReport = styled.main`
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
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 420px) {
    background-color: black;
    color: white;
  }
`;

export const DivTotalPedidos = styled.div`
  border: 3px solid white;
  padding: 5px 1rem 5px 1rem;
  border-radius: 10px;
  text-align: center;

  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const SectionDados = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;

  @media (max-width: 420px) {
    flex-wrap: wrap;
    justify-content: center;

    #aguardando {
      color: #0076c8;
    }
    #aguardando span {
      border-color: #0076c8;
      color: white;
      background-color: #0076c8;
    }

    #finalizado {
      color: #693dbf;
    }
    #finalizado span {
      border-color: #693dbf;
      color: white;
      background-color: #693dbf;
    }

    #pagos {
      color: #29c45b;
    }
    #pagos span {
      border-color: #29c45b;
      color: white;
      background-color: #29c45b;
    }
  }

  div {
    width: 10rem;
    margin: 0.5rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    border: 3px solid white;
    padding: 0;
    width: 5rem;
    border-radius: 100rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const SectionPagos = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    #receber {
      color: #f2b705;
      color: white;
      background-color: #f2b705;
    }

    #recebido {
      color: #29c45b;
      background-color: #29c45b;
      color: white;
    }
  }

  div {
    border: 3px solid black;
    padding: 5px 1rem 5px 1rem;
    border-radius: 10px;
    text-align: center;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const H1s = styled.h1`
  font-family: "Reenie Beanie", cursive;
  text-align: center;
  @media (max-width: 420px) {
    color: white;
    font-size: 2.5rem !important;
    box-shadow: none !important;
    font-weight: none !important;
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

  h1 {
    align-self: center;
    font-size: 4rem;
    box-shadow: 1px 1px 20px 1px white;
    border-radius: 10px;
    position: relative;
    padding: 0.5rem;
  }

  @media (max-width: 420px) {
    color: white;
  }
`;

export const NavS = styled.nav`
  a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
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

  .table-responsive {
    margin-top: 5rem;
  }
`;

export const TableS = styled.table`
  @media (max-width: 420px) {
    color: white;
  }

  #AGUARDANDO {
    background-color: #0076c8;
  }

  #FINALIZADO {
    background-color: #693dbf;
  }

  #PAGO {
    background-color: #29c45b;
  }

  a {
    text-decoration: none;
    color: white;
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

  button {
    margin-top: 1.5rem;
    width: 10rem;
    height: 3rem;
    border-radius: 7px;
    align-self: center;
    color: black;
  }
`;

export const MenuS = styled.div`
  padding: 5rem;
  width: 50rem;
  display: flex;
  justify-content: space-evenly;
  align-self: center;

  @media (max-width: 420px) {
    width: 50%;
    height: 40rem;
    flex-direction: column;
    padding: 0;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const ButtonMenuS = styled.button`
  margin: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 20px;
  background-color: black;
  color: white;
  box-shadow: 1px 1px 20px 1px black;

  @media (max-width: 420px) {
    box-shadow: 1px 1px 20px 1px white;
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
    margin: 0 0 1rem 0;
    color: white;
    border-color: white;
    height: 3rem;
    border-radius: 5px;
    padding: 0 0 0 0.5rem;
  }
  option {
    color: black;
  }

  input::placeholder {
    color: white;
  }

  label {
    color: white;
    font-size: 1.2rem;
  }

  select {
    background-color: transparent !important;
    margin: 0 0 1rem 0;
    color: white;
    border-color: white;
    height: 3rem;
    border-radius: 5px;
    padding: 0 0 0 0.5rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  button {
    width: 8rem;
    height: 2.5rem;
    border-radius: 5px;
  }
`;

export default ContainerS;
