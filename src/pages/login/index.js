import { Link } from "react-router-dom";

import ContainerS, { FormLogin, H1s } from "../style/style";

const Login = () => {
  return (
    <>
      <ContainerS>
        <H1s> Ministério Casa da Família </H1s>

        <FormLogin>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Login</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">senha</label>
          </div>

          <button>
            <Link to={"/home"}> Entrar</Link>
          </button>
        </FormLogin>
      </ContainerS>
    </>
  );
};

export default Login;
