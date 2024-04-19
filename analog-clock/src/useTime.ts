import { useEffect, useRef, useState } from "react";

export function useTime() {
  //   const [hours, setHours] = useState(0);
  //   const [mins, setMins] = useState(0);
  //   const [secs, setSecs] = useState(0);
  const [hoursInDeg, setHoursInDeg] = useState(0);
  const [minsInDeg, setMinsInDeg] = useState(0);
  const [secsInDeg, setSecsInDeg] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const date = new Date();
      //   setHours(date.getHours());
      //   setMins(date.getMinutes());
      //   setSecs(date.getSeconds());
      let hours = date.getHours();
      if (hours === 0) {
        hours = 12;
      } else if (hours > 12) {
        hours -= 12;
      }
      setHoursInDeg(Math.floor((hours / 12) * 360));
      setMinsInDeg(Math.floor((date.getMinutes() / 60) * 360));
      setSecsInDeg(Math.floor((date.getSeconds() / 60) * 360));

      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    }, 1000);
  }, []);

  return [hoursInDeg, secsInDeg, minsInDeg];
}
