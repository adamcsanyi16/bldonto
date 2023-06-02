import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Teammilan = () => {
  const [jatekosok, setJatekosok] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/inter");

        if (adat.ok) {
          const jsonData = await adat.json();
          setJatekosok(jsonData.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  const torol = (id) => {
    console.log(id);
    const jatekosTorol = async () => {
      try {
        const toroltJatekos = await fetch("http://localhost:3500/inter", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (toroltJatekos.ok) {
          const modositottJatekosok = jatekosok.filter(
            (item) => item._id !== id
          );
          setJatekosok(modositottJatekosok);
          const jsonData = await toroltJatekos.json();
          window.alert(jsonData.msg);
        } else {
          const jsonData = await toroltJatekos.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    jatekosTorol();
  };

  return (
    <div>
      <div className="univerzalis-container">
        <Link to="/interfelvetel">Új játékos felvétele:</Link>
        <div className="jatekosok-container">
          {jatekosok.map((jatekos) => (
            <div className="inter-container" key={jatekos._id}>
              <Link
                to={{
                  pathname: "/inter/" + jatekos._id,
                }}
              >
                <h1> {jatekos.nev}</h1>
              </Link>
              <p>Kor: {jatekos.kor}</p>
              <img src={jatekos.kep} alt="kép" />
              <div className="intergomb">
                <button onClick={() => torol(jatekos._id)}>Töröl</button>
              </div>
              <Link
                to={{
                  pathname: "/intermodosit/" + jatekos._id,
                }}
              >
                <h2> Módosít</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teammilan;
