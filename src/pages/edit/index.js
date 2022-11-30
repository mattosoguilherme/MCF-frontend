import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ContainerS, { ContainerHome, FormCadS } from "../style/style";
import axios from "axios";

const Edit = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pedido, setPedido] = useState({});
  const token = localStorage.getItem("token");
  const { id } = useParams();
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

    async function GetPedido() {
      await axios
        .get(`/marmita/${id}`, config)
        .then((r) => {
          setPedido(r.data);
       
        })
        .catch((e) => {
          alert(e.response.data.message);
        });
    }

    GetPedido();
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
      status: e.target.status.value,
    };

    await axios
      .patch(`/marmita/${id}`, inputPedido, config)
      .then((r) => {
        alert("Editado com sucesso");
        navigate("/list");
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
            <h1> Editar </h1>
            <FormCadS method="POST" onSubmit={HandleSubmit}>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                defaultValue={pedido.nome}
                required
              />

              <input
                id="quantidade"
                type="number"
                placeholder="Quantidade de marmitas"
                defaultValue={pedido.quantidade}
                required
              />

              <select id="tipo" required>
                <option disabled selected>
                  {pedido.tipo_encomenda}{" "}
                </option>
                <option> ENTREGA </option>
                <option> RETIRADA </option>
              </select>

              <select id="status" required>
                <option disabled selected>
                  {pedido.status}{" "}
                </option>
                <option> AGUARDANDO </option>
                <option> FINALIZADO </option>
                <option> PAGO </option>
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

export default Edit;
