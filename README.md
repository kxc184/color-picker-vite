# Objective

Implement a Color Picker feature where a user can select any color, and the app will display the top 3 closest Sherwin-Williams paint colors. Each match should be shown as a color chip with:

## 📁 Project Structure

- components/. – Reusable UI components like ColorChip.
- utils/findClosestColors.ts – Returns the 3 closest Sherwin-Williams colors for a given hex.
- data/color.ts – Sherwin-Williams color data (name + hex).
- types/color.ts - Sherwin-Williams color types

## 🚀 Getting Started

Clone the repo and check out the part1 branch.
Use the ColorPicker component to allow users to select a color.
Use findClosestColors(hexColor) to get the top 3 matches.
Display the results using the ColorChip component.

## ✅ Completion Criteria

User can pick a color using a color input.
The top 3 closest Sherwin-Williams colors are shown.
Each result includes the color chip, name, and hex value.

## 🧪 Part 2: Unit Testing (Coming Next)

In Part 2, you'll write unit tests for the components using Vite test, React Testing Library (RTL) and Mock service workers (MSW)
