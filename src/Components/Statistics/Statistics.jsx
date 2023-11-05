import { useEffect, useState } from "react";
import "./statistics.css";

function Statistics() {
  let [values, setValues] = useState([0, 0, 0, 0]);
  let statistics = [
    {
      target: 245,
      title: "New drinks and smoothies",
    },
    {
      target: 382,
      title: "Special offers",
    },
    {
      target: 403,
      title: "Satisfied clients",
    },
    {
      target: 121,
      title: "Partners throughout Jordan",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      let x = document.getElementById("statistics_container");
      if (window.scrollY >= 1700) {
        let newValues = [...values];

        const duration = 4000;
        const stepSizes = statistics.map(
          (stat) => stat.target / (duration / 40)
        );

        const intervalId = setInterval(() => {
          if (newValues[0] < statistics[0].target)
            newValues[0] = newValues[0] + Math.ceil(stepSizes[0]);
          if (newValues[1] < statistics[1].target)
            newValues[1] = newValues[1] + Math.ceil(stepSizes[1]);
          if (newValues[2] < statistics[2].target)
            newValues[2] = newValues[2] + Math.ceil(stepSizes[2]);
          if (newValues[3] < statistics[3].target)
            newValues[3] = newValues[3] + Math.ceil(stepSizes[3]);

          const allTargetsReached = newValues.every(
            (value, index) => value >= statistics[index].target
          );

          if (allTargetsReached) {
            clearInterval(intervalId);
            setValues(statistics.map((stat) => stat.target));
          } else {
            setValues(newValues);
          }
        }, 40);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [values]);

  return (
    <>
      <section className="statistics_container" id="statistics_container">
        <div className="statistics_content">
          {statistics.map((element, idx) => {
            return (
              <div className="stat_box" key={idx}>
                <span className="target">{values[idx]}</span>
                <div className="stat_divider" />
                <span className="stat_title">{element.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Statistics;
