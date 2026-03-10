import { useState } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Ingrese un numero valido");
      return;
    }

    setResultado(n1 + n2);
  };

  return (
    <div className="calculator-container">
      <h1>Suma de dos numeros</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Primer num"
            required
          />
          <span>+</span>
          <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Segundo num"
            required
          />
        </div>

        <button type="submit">Calcular</button>
      </form>

      {resultado !== null && (
        <div className="result">
          Resultado: <strong>{resultado}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
