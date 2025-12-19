import { useEffect, useState } from "react";

const useTypewriter = (
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 500
) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } 
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } 
    else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } 
    else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return displayText;
};

export default useTypewriter;
