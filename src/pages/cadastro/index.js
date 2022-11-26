import { Link } from "react-router-dom";
import ContainerS, { FormCadS } from "../style/style";

const Cadastro = () => {
  return (
    <>
      <ContainerS>
        <h1> Cadastro </h1>
        <FormCadS>
          <input type="text" placeholder="Nome" />

          <input type="number" placeholder="Quantidade de marmitas" />

          <label> Tipo de pedido</label>
          <select>
            <option>Entrega </option>
            <option> Retirada </option>
          </select>

          <div>
            <Link to={"/home"}>
              <button>Voltar </button>
            </Link>

            <button> Salvar</button>
          </div>
        </FormCadS>
      </ContainerS>
    </>
  );
};

export default Cadastro;
