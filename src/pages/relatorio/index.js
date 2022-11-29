import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import {
  ContainerHome,
  ContainerReport,
  DivTotalPedidos,
  SectionDados,
  SectionPagos,
} from "../style/style";

const Report = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
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
          setLogged(false);
          navigate("/");
        });
    }

    GetUser();
  }, []);

  return (
    <>
      {!loading && (
        <>
          <ContainerHome>
            <img
              width="200px"
              height="200px"
              src="https://media.tenor.com/6gHLhmwO87sAAAAj/gg.gif"
            />
          </ContainerHome>
        </>
      )}

      {logged && (
        <>
        <Header/>
          <ContainerReport>
            <DivTotalPedidos>
              <h2>Total de Pedidos</h2>
              <span> 100 </span>
            </DivTotalPedidos>

            <SectionDados>
              <div id="aguardando">
                <h3> Aguardando </h3>
                <span> 20</span>
              </div>

              <div id="finalizado">
                <h3> Finalizado </h3>
                <span> 40</span>
              </div>

              <div id="pagos">
                <h3> Pagos </h3>
                <span> 40</span>
              </div>
            </SectionDados>

            <SectionPagos>
              <div id="receber">
                <h4> A Receber</h4>
                <span> R$ 1.000,00</span>
              </div>

              <div id="recebido">
                <h4>Recebido</h4>
                <span> R$ 1.000,00</span>
              </div>
            </SectionPagos>
          </ContainerReport>
        </>
      )}
    </>
  );
};

export default Report;
