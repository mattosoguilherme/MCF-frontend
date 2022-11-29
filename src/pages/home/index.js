import { Link } from "react-router-dom";
import { ButtonMenuS, ContainerHome, MenuS } from "../style/style";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetUser() {
      await axios
        .get("/auth", config)
        .then((r) => {
          setLogged(true);
          setLoading(true);
        })
        .catch((e) => {
          setLogged(false)
          navigate("/")
        });
    }

    GetUser();
  }, []);

  return (
    <>
      {!loading && (
        <>
          <ContainerHome> 
            <img width="200px" height="200px" src="https://media.tenor.com/6gHLhmwO87sAAAAj/gg.gif" />
          </ContainerHome>
        </>
      )}

      {logged && (
        <>
         
         <ContainerHome>
            <MenuS>
              <Link to={"/cadastro"}>
                <ButtonMenuS> ADICIONAR PEDIDO </ButtonMenuS>
              </Link>

              <Link to={"/list"}>
                <ButtonMenuS> PEDIDOS </ButtonMenuS>
              </Link>

              <Link to={"/report"}>
                <ButtonMenuS> RELATÓRIO </ButtonMenuS>
              </Link>
            </MenuS>
          </ContainerHome>


        </>
      )}
    </>
  );
};

export default Home;
