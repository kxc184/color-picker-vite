import React from "react";

const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (e: string) => void;
}) => {
  return (
    <>
      <input
        id="color"
        type="color"
        value={color}
        className="sr-only"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      <label htmlFor="color">
        {color}
        <div className="w-16 h-16" style={{ backgroundColor: color }}></div>
      </label>
    </>
  );
};

export default ColorPicker;
