import { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      icons: <FaCocktail />,
      title: "Free Cocktails",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, reprehenderit. ",
    },
    {
      icons: <FaHiking />,
      title: "Endless Hiking",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, reprehenderit. ",
    },
    {
      icons: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, reprehenderit. ",
    },
    {
      icons: <FaBeer />,
      title: "Strongest Beer",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, reprehenderit. ",
    },
  ];

  return (
    <section className="services">
      <Title title="service" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article className="service" key={index}>
              <span>{item.icons}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
