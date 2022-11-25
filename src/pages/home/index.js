import { Link } from "react-router-dom";
import { ContainerHome, MenuS } from "../style/style";

const Home = () => {
  return (
    <>
      <ContainerHome>
        <MenuS>
    
            <button> <Link to={"/cadastro"}> PEDIDOS </Link> </button>
   

     
            <button> ADICIONAR PEDIDO </button>
      

    
            <button> RELATÓRIO </button>
          
        </MenuS>
      </ContainerHome>
    </>
  );
};

export default Home;
