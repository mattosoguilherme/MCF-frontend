import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContainerS, { FormLogin, H1s } from "../style/style";

const Login = () => {
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputLogin = {
      email: e.target.floatingInput.value,
      senha: e.target.floatingPassword.value,
    };

    await axios
      .post("/auth", inputLogin)
      .then((r) => {
        const token = r.data.token;
        localStorage.setItem("token", token);

        if (token) {
          navigate("/home");
        }
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.data.message);
      });
  };

  return (
    <>
      <ContainerS>
        <H1s> Ministério Casa da Família </H1s>

        <FormLogin method="POST" onSubmit={HandleSubmit}>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              required
            />
            <label for="floatingInput">Login</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">senha</label>
          </div>

          <button type="submit"> Entrar</button>
        </FormLogin>
      </ContainerS>
    </>
  );
};

export default Login;
