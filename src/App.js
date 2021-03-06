import React from "react";
import { Parallax } from "react-parallax";

const image1 =
  "https://www.pexels.com/photo/sliced-bread-with-sliced-vegetables-on-brown-wooden-chopping-board-4087611/";
const image2 =
  "https://www.pexels.com/photo/person-holding-a-knife-slicing-a-food-on-a-white-plate-4686832/";
const image3 =
  "https://www.pexels.com/photo/green-vegetable-on-brown-wooden-chopping-board-4964098/";

const inlineStyle = {
  background: "#fff",
  left: "50%",
  right: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};
function App() {
  return (
    <div className="App">
      <Parallax bgImage={image1}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>The Food That Brings Joy</div>
        </div>
      </Parallax>
    </div>
  );
}
export default App;
