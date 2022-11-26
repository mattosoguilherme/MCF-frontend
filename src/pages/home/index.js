import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import { ButtonMenuS, ContainerHome, MenuS } from "../style/style";

const Home = () => {
  return (
    <>
      <ContainerHome>
      
        <MenuS>
          <Link to={"/cadastro"}>
           
            <ButtonMenuS> ADICIONAR PEDIDO </ButtonMenuS>
          </Link>

          <Link to={"/list"}>
        
            <ButtonMenuS> PEDIDOS </ButtonMenuS>
          </Link>

          <ButtonMenuS> RELATÓRIO </ButtonMenuS>
        </MenuS>
      </ContainerHome>
    </>
  );
};

export default Home;
