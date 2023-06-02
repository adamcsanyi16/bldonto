import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";

const City = () => {
  const [city, setCity] = useState({});
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/mancity");

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let cityVal = jsonData.msg.filter((elem) => elem._id === param.id);
          console.log(cityVal);
          setCity(cityVal[0]);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, [param.id]);

  const torol = (id) => {
    console.log(id);
    const jatekosTorol = async () => {
      try {
        const toroltJatekos = await fetch("http://localhost:3500/mancity", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (toroltJatekos.ok) {
          const jsonData = await toroltJatekos.json();
          window.alert(jsonData.msg);
          navigate("/manchestercity");
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
    <div className="onecity-container">
      <div className="citykep">
        <img src={city.kep} alt="kép" />
      </div>
      <div className="cityinfo">
        <h1>A játekos neve: {city.nev}</h1>
        <p>A játékos életkora: {city.kor}</p>
        <p>A játékos posztja: {city.poszt}</p>
        <p>Erősebbik lába: {city.lab}</p>
        <div className="citygomb">
          <button onClick={() => torol(city._id)}>Töröl</button>
        </div>
        <Link
          to={{
            pathname: "/citymodosit/" + city._id,
          }}
        >
          <h2 className="modosit">Módosít</h2>
        </Link>
      </div>
    </div>
  );
};

export default City;
