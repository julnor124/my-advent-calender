import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/Users/julianordqvist/advent-calendar/src/Css/Calendar.css"; // Ensure the correct path

const Calendar = () => {
  const doors = Array.from({ length: 24 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 24]

  // State for video source
  const [videoSrc, setVideoSrc] = useState("/julvideo.mp4"); // Default video for larger screens

  // Effect to handle window resize and change video source
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Example breakpoint for mobile devices
        setVideoSrc("/julvideo-mobil.mp4"); // Video for smaller devices
      } else {
        setVideoSrc("/julvideo.mp4"); // Video for larger devices
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="calendar-container">
      <video
        className="background-video"
        src={videoSrc} // Use state variable for video source
        autoPlay
        loop
        muted
      />
      <h1 className="welcome-message">JULIAS JULKALENDER TILL FAMILJEN 2024</h1>
      <div className="calendar">
        {doors.map((door) =>
          door === 4 ? ( // If the door is 24, route to Wordle
            <Link key={door} to={`/wordle`} className="door">
              <div className="door-number">{door}</div>
            </Link>
          ) : (
            // Else, link to the standard door
            <Link key={door} to={`/door/${door}`} className="door">
              <div className="door-number">{door}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
