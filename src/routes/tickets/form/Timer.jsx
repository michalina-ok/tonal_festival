import { useState, useRef, useEffect } from "react";

const formatTime = (time) => {
  

  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function Timer(props) {
  // const [countdown, setCountdown] = useState(seconds)
  // const timerId = useRef()
 // const timerId = props.timerId;



  useEffect(() => {
    props.timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

//   useEffect(() => {
//     if (countdown <= 0) {
//       clearInterval(timerId.current);
//       alert("END");
//     }
//   }, [countdown]);

//   return <p>Time left {formatTime(countdown)}</p>;
}