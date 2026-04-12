import "./services.css";
// import SafeImg from "../components/SafeImg";
import { servicesData } from "./servicesData.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-head">
        <h2 style={{ color: "white" }}>Our Services</h2>
        <p className="muted">Complete solutions for home, office and vehicle shifting.</p>
      </div>

      <div className="cards">
        {servicesData.map((service, index) => (
          <article className="card" key={index}>
            <div className="card-img">
              <img src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
