import { sherwinPaintColors } from "../data/color";
import type { ColorMatch } from "../types/color";

// Converts the input hex color to an RGB object (e.g., { r: 255, g: 87, b: 51 }).
// This is needed because color distance calculations are easier in RGB space.
function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

// Euclidean distance formula
function calculateDistance(
  color1: [number, number, number],
  color2: [number, number, number]
): number {
  return Math.sqrt(
    Math.pow(color1[0] - color2[0], 2) +
      Math.pow(color1[1] - color2[1], 2) +
      Math.pow(color1[2] - color2[2], 2)
  );
}

// computes distance, sorts by smallest distance and returns the first three
export async function findClosestColors(
  hexColor: string
): Promise<ColorMatch[]> {
  const targetRgb = hexToRgb(hexColor);

  const colorMatches = sherwinPaintColors
    .filter((color) => color.hex) // Skip colors without hex values (API colors scraped from is missing hex on some values)
    .map((color) => ({
      name: color.name,
      hex: color.hex,
      distance: calculateDistance(targetRgb, color.rgb || hexToRgb(color.hex)),
    }));

  return colorMatches.sort((a, b) => a.distance - b.distance).slice(0, 3);
}
