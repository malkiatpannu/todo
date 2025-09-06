import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect runs after render
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(interval); // cleanup
  }, []); // [] = run once on mount

  return <p>⏱ Time: {seconds} sec</p>;
}
