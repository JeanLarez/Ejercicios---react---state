import { useState } from "react";

const MyInput = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        placeholder="Nombre"
      />
      <p>Nombre es {nombre}</p>

      <input
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="Color"
      />
      <p>Nombre es {color}</p>
    </div>
  );
};

export default MyInput;
