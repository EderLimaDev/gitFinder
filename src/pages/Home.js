import { Header } from "../components/Header";
import { useState } from "react";
import background from "../assets/background.png";
import "./styles.css";
import { ItemList } from "../components/ItemList";

export const Home = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);


  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json();
    
    if(newUser.name) {
      const {avatar_url, name, bio } = newUser
      setCurrentUser({avatar_url, name, bio })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json();

      if(newRepos.length) {
        setRepos(newRepos)
      }


    }
  }

  return (
    <div>
      <Header />
      <div className="conteudo">
        <img src={background} alt="Bg github" className="background" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
              type="text"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {/* {currentUser.name ? (): null} */}
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/81269326?s=400&u=6ee8ae88cc938671a29b3290f7a39ae75baa6eac&v=4"
              alt="imagem do Perfil"
              className="profile"
            />

            <div>
              <h3>Eder Lima</h3>
              <span>@EderLimaDev</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />

          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="teste" description="teste de descrição" />
            <ItemList title="teste" description="teste de descrição" />
            <ItemList title="teste" description="teste de descrição" />
          </div>
        </div>
      </div>
    </div>
  );
};
