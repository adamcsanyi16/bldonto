import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Ujinter = () => {
  const [nev, setNev] = useState("");
  const [kor, setKor] = useState(0);
  const [lab, setLab] = useState("");
  const [poszt, setPoszt] = useState("");
  const [kep, setKep] = useState("");

  const navigate = useNavigate();

  const feldolgoz = (event) => {
    event.preventDefault();
    const adatok = { nev, kor, lab, poszt, kep };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/inter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        window.alert(response.msg);
        navigate("/intermilan");
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
                  onChange={(e) => setKor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lab">Lába</label>
              </td>
              <td>
                <input
                  type="text"
                  name="lab"
                  id="lab"
                  onChange={(e) => setLab(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="poszt">Posztja</label>
              </td>
              <td>
                <input
                  type="text"
                  name="poszt"
                  id="poszt"
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
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={(event) => feldolgoz(event)}>Feldolgoz</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Ujinter;
