import { useEffect } from "react";

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
      <p>
        Use color chips to display top 3 Colors closest to the color you
        selected
      </p>
    </main>
  );
}

export default App;
