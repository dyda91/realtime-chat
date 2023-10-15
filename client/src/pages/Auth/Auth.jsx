import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
      };
      const loading = useSelector((state) => state.authReducer.loading);
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const [isSignUp, setIsSignUp] = useState(false);
    
      const [data, setData] = useState(initialState);
    
      const [confirmPass, setConfirmPass] = useState(true);
    
    //   const dispatch = useDispatch()
    
      // Reset Form
      const resetForm = () => {
        setData(initialState);
        setConfirmPass(confirmPass);
      };
    
      // handle Change in input
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      // Form Submission
      const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
          data.password === data.confirmpass
            ? dispatch(signUp(data, navigate))
            : setConfirmPass(false);
        } else {
          dispatch(logIn(data, navigate));
        }
      };



  return (
    <div className="Auth">
    {/* left side */}

    <div className="a-left">
      <img src={Logo} alt="" />

      <div className="Webname">
        <h1>Realtime Chat</h1>
        <h6>Aplicação para troca de mensagens</h6>
      </div>
    </div>

    {/* right form side */}

    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Register" : "Login"}</h3>
        {isSignUp && (
          <div>
            <input
              required
              type="text"
              placeholder="Nome"
              className="infoInput"
              name="firstname"
              value={data.firstname}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              placeholder="Sobrenome"
              className="infoInput"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
            />
          </div>
        )}

        <div>
          <input
            required
            type="text"
            placeholder="Nome de usuário"
            className="infoInput"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            type="password"
            className="infoInput"
            placeholder="Senha"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {isSignUp && (
            <input
              required
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirmar senha"
              onChange={handleChange}
            />
          )}
        </div>

        <span
          style={{
            color: "red",
            fontSize: "12px",
            alignSelf: "flex-end",
            marginRight: "5px",
            display: confirmPass ? "none" : "block",
          }}
        >
          *A senha e a confirmação de senha devem ser iguais!
        </span>
        <div>
          <span
            style={{
              fontSize: "12px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              resetForm();
              setIsSignUp((prev) => !prev);
            }}
          >
            {isSignUp
              ? "Já tem uma conta? Entrar"
              : "Ainda não tem uma conta? Cadastre-se"}
          </span>
          <button
            className="button infoButton"
            type="Submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Auth;