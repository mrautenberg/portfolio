import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://api.github.com/users/mrautenberg");

      setUser(res.data);
    };

    getUser(user);
    // eslint-disable-next-line
  }, []);

  const { html_url, public_repos } = user;

  return (
    <main className="home-container">
      <h1>Hello.</h1>
      <h2>My name is Max Rautenberg.</h2>
      <p>
        I'm an aspiring developer at the beginning of my journey of becoming a
        React developer. Before doing this, I worked in academia for a couple of
        years, constantly jealous of my friends who were working as developers.
        Instead of sitting around being grumpy, I decided to persue my dreams
        and study front-end development at KYH, Stockholm.
      </p>
      <p>
        Open source is an awesome thing, and I try to have all my source code
        available on Github (currently {public_repos} public repos). Check out
        my{" "}
        <a className="highlight" href={html_url}>
          Github
        </a>{" "}
        to see all of my ongoing and finished projects.
      </p>
      <p>
        When not at my computer coding, I enjoy spending time with my friends
        and family, being outdoors and trying to be a somewhat decent DM in
        Dungeons & Dragons.
      </p>
      <p>
        I'm currently looking for a place to do my LIA. If you want to get in
        touch with me in regards to that, or just want to say hi, feel free to
        write an email to{" "}
        <span className="highlight"> mrautenberg@outlook.com</span> or contact
        me on <span className="highlight">LinkedIn</span>.
      </p>
    </main>
  );
};

export default Home;
