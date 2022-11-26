import Header from "../../components/navbar";
import { ContainerHome, TableS } from "../style/style";

const List = () => {
  return (
    <>
     
      <ContainerHome>
       
       <Header/>



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
              <tr>
                <th scope="row">Guilherme</th>
                <td>Entrega</td>
                <td>3</td>
                <td>reservado</td>
              </tr>
            </tbody>
          </TableS>

        </div>


      </ContainerHome>
    </>
  );
};

export default List;
