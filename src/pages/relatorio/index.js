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

const QtdPedido = (listaPedidos) => {
  let qtdPedidos = 0;
  for (let index = 0; index < listaPedidos.length; index++) {
    qtdPedidos += listaPedidos[index].quantidade;
  }
  return qtdPedidos;
};

const Report = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [pedido, setPedido] = useState(0);
  const [aguard, setAguard] = useState(0);
  const [fin, setFin] = useState(0);
  const [pag, setPag] = useState(0);
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

    async function GetPedidos() {
      await axios
        .get("/marmita", config)
        .then((r) => {
          const todos = r.data;
          const listAguard = todos.filter((p) => p.status == "AGUARDANDO");
          const listFin = todos.filter((p) => p.status == "FINALIZADO");
          const listPag = todos.filter((p) => p.status == "PAGO");

          setPedido(QtdPedido(todos));
          setFin(QtdPedido(listFin));
          setPag(QtdPedido(listPag));
          setAguard(QtdPedido(listAguard));
          
        })
        .catch((e) => {
          alert(e.response.data.message);
        });
    }

    GetUser();
    GetPedidos();
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
          <Header />
          <ContainerReport>
            <DivTotalPedidos>
              <h2>Total de Pedidos</h2>
              <span> {pedido} </span>
            </DivTotalPedidos>

            <SectionDados>
              <div id="aguardando">
                <h3> Aguardando </h3>
                <span> {aguard}</span>
              </div>

              <div id="finalizado">
                <h3> Finalizado </h3>
                <span> {fin} </span>
              </div>

              <div id="pagos">
                <h3> Pagos </h3>
                <span> {pag} </span>
              </div>
            </SectionDados>

            <SectionPagos>
              <div id="receber">
                <h4> A Receber</h4>
                <span> R$ {pedido*35}</span>
              </div>

              <div id="recebido">
                <h4>Recebido</h4>
                <span> R$ {pag*35}</span>
              </div>
            </SectionPagos>
          </ContainerReport>
        </>
      )}
    </>
  );
};

export default Report;
