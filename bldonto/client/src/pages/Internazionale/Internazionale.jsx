import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";

const Internazionale = () => {
  const [inter, setInter] = useState({});
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/inter");

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let interVal = jsonData.msg.filter((elem) => elem._id === param.id);
          console.log(interVal);
          setInter(interVal[0]);
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
        const toroltJatekos = await fetch("http://localhost:3500/inter", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (toroltJatekos.ok) {
          const jsonData = await toroltJatekos.json();
          window.alert(jsonData.msg);
          navigate("/intermilan");
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
    <div className="oneinter-container">
      <div className="interkep">
        <img src={inter.kep} alt="kép" />
      </div>
      <div className="interinfo">
        <h1>A játékos neve: {inter.nev}</h1>
        <p>A játékos életkora: {inter.kor}</p>
        <p>A játékos posztja: {inter.poszt}</p>
        <p>Erősebbik lába: {inter.lab}</p>
        <div className="intergomb">
          <button onClick={() => torol(inter._id)}>Töröl</button>
        </div>
        <Link
          to={{
            pathname: "/intermodosit/" + inter._id,
          }}
        >
          <h2> Módosít</h2>
        </Link>
      </div>
    </div>
  );
};

export default Internazionale;
