import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const TypingAnimation = ({ style, text }) => {
  console.log(text, typeof text);
  const [textToShow, setTextToShow] = useState("");
  // Text to animate
  const delay = 100; // Delay between each character (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTextToShow(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return <Text style={style}>{textToShow}</Text>;
};

export default TypingAnimation;
