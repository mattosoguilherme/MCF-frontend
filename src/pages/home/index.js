import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import { ContainerHome, MenuS } from "../style/style";

const Home = () => {
  return (
    <>
      <ContainerHome>
        <Header />
        <MenuS>
          <Link to={"/cadastro"}>
           
            <button> ADICIONAR PEDIDO </button>
          </Link>

          <Link to={"/list"}>
        
            <button> PEDIDOS </button>
          </Link>

          <button> RELATÓRIO </button>
        </MenuS>
      </ContainerHome>
    </>
  );
};

export default Home;
