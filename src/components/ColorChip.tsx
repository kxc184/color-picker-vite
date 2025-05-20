const ColorChip = ({ color, name }: { color: string; name: string }) => {
  return (
    <div className="rounded-md shadow-xl border border-black/40  w-32 h-44 p-2">
      <div className="flex flex-col h-full">
        <div className="w-full h-32" style={{ backgroundColor: color }}></div>
        <div className="flex flex-col h-full justify-around ">
          <p className=" text-lg">{name}</p>
          <p className="text-sm text-gray-600">{color}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorChip;
