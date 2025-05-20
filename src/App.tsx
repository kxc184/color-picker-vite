import { useEffect } from "react";

function App() {
  // init color, matches states

  useEffect(() => {
    const fetchClosestColors = async () => {
      // use findClosestColors from utils to do math stuff and find top three closest colors
      // to sherwin williams colors
      // then updated your matches state
    };
    fetchClosestColors();
  }, []);

  return (
    <main className=" flex flex-col items-center justify-center w-screen h-screen gap-8 bg-gray-300">
      <p>Use both color picker component to choose color</p>
      <p>
        Use color chips to display top 3 Colors closest to the color you
        selected
      </p>
    </main>
  );
}

export default App;
