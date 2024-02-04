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
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };


  return (
    <div>
      <Header />
      <div className="conteudo">
        <img src={background} alt="Bg github" className="background" />
        <div className="info">
          <div className="info-input">
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
              type="text"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  alt="imagem do Perfil"
                  className="profile"
                />

                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos ? (
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map((repo) => (
                <ItemList key={repo.id} title={repo.name} description={repo.description} url={repo.html_url}/>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
