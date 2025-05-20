import { useEffect, useState } from "react";
import ColorChip from "./components/ColorChip";
import { findClosestColors } from "./utils";
import type { ColorMatch } from "./types/color";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [color, setColor] = useState("#000000");
  const [matches, setMatches] = useState<ColorMatch[]>([]);

  useEffect(() => {
    const fetchClosestColors = async () => {
      const result = await findClosestColors(color);
      setMatches(result);
    };
    fetchClosestColors();
  }, [color]);

  return (
    <main className=" flex flex-col items-center justify-center w-screen h-screen gap-8 bg-gray-300">
      <ColorPicker color={color} onChange={setColor} />
      <div className="flex  gap-2">
        {matches.map((c, i) => (
          <ColorChip key={i} color={c.hex} name={c.name} />
        ))}
      </div>
    </main>
  );
}

export default App;
