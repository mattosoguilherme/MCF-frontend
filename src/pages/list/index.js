import Header from "../../components/navbar";
import { ContainerHome, TableS } from "../style/style";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pedidos, setPedidos] = useState([]);
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

    async function GetPedidos() {
      await axios.get("/marmita", config).then((r) => setPedidos(r.data));
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
          <ContainerHome>
            <Header />

            <div className="table-responsive">
              <TableS className=" overflow-auto table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Tipo de encomenda</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {pedidos.map((p) => (
                    <tr>
                      <th scope="row"> {p.nome} </th>
                      <td>{p.tipo_encomenda}</td>
                      <td>{p.quantidade}</td>
                      <td>{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </TableS>
            </div>
          </ContainerHome>
        </>
      )}
    </>
  );
};

export default List;
