import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ContainerS, { ContainerHome, FormCadS } from "../style/style";
import axios from "axios";

const Cadastro = () => {
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
          setLogged(false);
          navigate("/");
        });
    }

    GetUser();
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const inputPedido = {
      nome: e.target.nome.value,
      quantidade: Number(e.target.quantidade.value),
      tipo_encomenda: e.target.tipo.value,
    };

    await axios
      .post("/marmita", inputPedido, config)
      .then((r) => {
        alert("Salvo com sucesso");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

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
          <ContainerS>
            <h1> Cadastro </h1>
            <FormCadS method="POST" onSubmit={HandleSubmit}>
              <input id="nome" type="text" placeholder="Nome" required />

              <input
                id="quantidade"
                type="number"
                placeholder="Quantidade de marmitas"
                required
              />

              <select id="tipo" required>
                <option>Tipo de pedido </option>
                <option> ENTREGA </option>
                <option> RETIRADA </option>
              </select>

              <div>
                <Link to={"/home"}>
                  <button>Voltar </button>
                </Link>

                <button type="submit"> Salvar</button>
              </div>
            </FormCadS>
          </ContainerS>
        </>
      )}
    </>
  );
};

export default Cadastro;
