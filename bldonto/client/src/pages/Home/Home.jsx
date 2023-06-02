import { useEffect, useState } from "react";

const Home = () => {
  const [final, setFinal] = useState("");

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500");

        if (adat.ok) {
          const jsonFinal = await adat.json();
          setFinal(jsonFinal.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
          setFinal(jsonData.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return (
    <div className="home-container">
      <h1>{final}</h1>
      <div className="kep-container">
        <a href="/manchestercity">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
            alt=""
          />
        </a>
        <div className="vs">
          <img
            src="https://www.freepnglogos.com/uploads/vs-png/vs-gaming-league-masters-season-logo-transparent-16.png"
            alt=""
          />
        </div>
        <a href="/intermilan">
          <img
            src="https://logodownload.org/wp-content/uploads/2017/02/inter-milan-logo.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
