import { useEffect } from "react";
import ColorChip from "./components/ColorChip";
import ColorPicker from "./components/ColorPicker";

function App() {
  // Todo: init color, matches states

  useEffect(() => {
    const fetchClosestColors = async () => {
      // Todo: use findClosestColors from utils to return the closest colors given a color
    };
    fetchClosestColors();
  }, []);

  return (
    <main className=" flex flex-col items-center justify-center w-screen h-screen gap-8 bg-gray-300">
      <p>Use color picker component to choose color</p>
      <ColorPicker
        color="#FFFFFF"
        onChange={() => console.log("color changed")}
      />
      <p>
        Use color chips to display top 3 Colors closest to the color you
        selected
      </p>
      <div className="flex gap-2">
        <ColorChip name={"Red"} color="#FF0000" />
        <ColorChip name={"Green"} color="#00FF00" />
        <ColorChip name={"Blue"} color="#0000FF" />
      </div>

      <a
        target="blank"
        href="https://www.sherwin-williams.com/en-us/color/color-tools/color-visualizer/active/color-wall/section/sherwin-williams-colors"
        className="p-4 bg-blue-500 text-xl text-white hover:scale-105 duration-300 hover:shadow-xl "
      >
        Checkout Sherwins Paint Color Visualizer
      </a>
    </main>
  );
}

export default App;
