const ColorChip = ({ color, name }: { color: string; name: string }) => {
  return (
    <div className="rounded-md  shadow-inner border border-gray-100 w-32 h-44 p-2 bg-white transition-transform hover:scale-105 duration-300">
      <div className="flex flex-col h-full">
        <div
          className="w-full h-32 rounded-md shadow-inner"
          style={{ backgroundColor: color }}
        ></div>
        <div className="flex flex-col h-full justify-around mt-2">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-600 tracking-wide">{color}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorChip;
