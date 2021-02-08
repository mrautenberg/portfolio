import React, { useState, useEffect } from "react";
import axios from "axios";

const GithubCard = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      const res = await axios.get("https://api.github.com/users/mrautenberg");

      setUser(res.data);
      setLoading(false);
    };

    getUser(user);
  }, []);

  const { login, name, bio, html_url, public_repos, avatar_url } = user;

  return (
    <aside className="home-github">
      <h3>{name}</h3>
      <p> {bio} </p>
      <div>
        <img src={avatar_url} alt="stort huvud" />
      </div>
      <p>{login}</p>
      <a style={{ color: "black" }}>{html_url}</a>
      <p>{public_repos}</p>
    </aside>
    // <aside className="home-github">

    //       <h3>{data.name}</h3>
    //       <p>{data.bio}</p>
    //       <p>{data.login}</p>
    //       <a href={data.html_url}></a>
    //       <p>{data.public_repos}</p>
    //     </>
    //   ))}
    // </aside>
  );
};

// <div>
//   {loading && <p>loading...</p>}
//   {user.name}
//   <br />
//   {user.bio}
//   <br />
//   {user.login}
//   <br />
//   {user.avatar_url}
//   <br />
//   {user.html_url}
//   <br />
//   {user.public_repos}
// </div>

export default GithubCard;
