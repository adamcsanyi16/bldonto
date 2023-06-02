import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Citymodosit = () => {
  const param = useParams();
  const [paramId, setParamid] = useState(param.id);
  const [nev, setNev] = useState("");
  const [kor, setKor] = useState(0);
  const [lab, setLab] = useState("");
  const [poszt, setPoszt] = useState("");
  const [kep, setKep] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/mancity");

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let cityVal = jsonData.msg.filter((elem) => elem._id === param.id);
          setNev(cityVal[0].nev);
          setKor(cityVal[0].kor);
          setLab(cityVal[0].lab);
          setPoszt(cityVal[0].poszt);
          setKep(cityVal[0].kep);
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

  const modosit = (event) => {
    event.preventDefault();
    const adatok = { paramId, nev, kor, lab, poszt, kep };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/mancity", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        window.alert(response.msg);
        navigate("/manchestercity");
      } else {
        const response = await adat.json();
        window.alert(response.msg);
      }
    };

    elkuld();
  };

  return (
    <div className="felvetel-container">
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nev">Neve</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nev"
                  id="nev"
                  value={nev}
                  onChange={(e) => setNev(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="kor">Kora</label>
              </td>
              <td>
                <input
                  type="number"
                  name="kor"
                  id="kor"
                  value={kor}
                  onChange={(e) => setKor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lab">Láb</label>
              </td>
              <td>
                <input
                  type="text"
                  name="lab"
                  id="lab"
                  value={lab}
                  onChange={(e) => setLab(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="poszt">Poszt</label>
              </td>
              <td>
                <input
                  type="text"
                  name="poszt"
                  id="poszt"
                  value={poszt}
                  onChange={(e) => setPoszt(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="kep">Kép címe</label>
              </td>
              <td>
                <input
                  type="text"
                  name="kep"
                  id="kep"
                  value={kep}
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={(event) => modosit(event)}>Módosít</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Citymodosit;
