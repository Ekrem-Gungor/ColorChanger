import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [colorHistory, setColorHistory] = useState([]);

  const changeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    if (color !== newColor) {
      setColor(newColor);
    }

    setColorHistory((prevHistory) =>
      prevHistory.includes(newColor)
        ? prevHistory
        : [newColor, ...colorHistory.slice(0, 4)]
    ); // Son 4 renk saklanıyor
  };

  const handleColorChange = (e) => {
    const targetColor = e.target.value;
    if (color !== targetColor) {
      setColor(targetColor);
    }

    setColorHistory((prevHistory) =>
      prevHistory.includes(targetColor)
        ? prevHistory
        : [targetColor, ...prevHistory.slice(0, 4)]
    ); // Son 4 renk saklanıyor
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <h1>Arka Plan Renk Değiştirici</h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{
          width: "50px",
          height: "50px",
          border: "none",
          cursor: "pointer",
        }}
      />

      <button
        onClick={changeColor}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Renk Değiştir
      </button>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Şu anki renk: {color}
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {colorHistory.map((prevColor, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: prevColor,
              borderRadius: "50%",
              border: "2px solid #000",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorChanger;
