// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const DARK_MODE_CLASS = "dark";
const DARK_MODE_BUTTON_TEXT = "Dark Mode";
const LIGHT_MODE_BUTTON_TEXT = "Light Mode";

const darkModeStyles = "bg-primary text-primary-foreground";
const contentStyles = "bg-background text-foreground p-4";
const buttonStyles = "px-4 py-2 rounded-lg";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-end p-4">
      <button
        className={`${isDarkMode ? darkModeStyles : ""} ${buttonStyles}`}
        onClick={handleDarkModeToggle}
      >
        {isDarkMode ? LIGHT_MODE_BUTTON_TEXT : DARK_MODE_BUTTON_TEXT}
      </button>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Content = ({ isDarkMode }) => {
  return (
    <div className={`${contentStyles} ${isDarkMode ? DARK_MODE_CLASS : ""}`}>
      <h1 className="text-2xl font-bold mb-4">
        Welcome to Dark Mode/Light Mode Toggle
      </h1>
      <p className="mb-4">
        Click the button above to switch between Dark Mode and Light Mode!
      </p>
      <img
        src="https://placehold.co/400?text=Dark+Mode"
        alt="Dark Mode Image"
        className="w-full mb-4"
      />
    </div>
  );
};

const DarkModeToggleApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <DarkModeToggle setIsDarkMode={setIsDarkMode} />
      <Content isDarkMode={isDarkMode} />
    </>
  );
};

export default DarkModeToggleApp;
