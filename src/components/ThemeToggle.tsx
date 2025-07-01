
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 rounded-full w-12 h-12 p-0"
      variant="outline"
    >
      {darkMode ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;
