import React from "react";
import "./Footer.css";
import guarntee from "../assets/guarntee.png"

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-inner">
<img src={guarntee} alt="varified" loading="lazy" style={{width:"375", height:"667"}}/>
          {/* About Section */}
          <div className="footer-col">
            <h3>About</h3>
            <p>
              We professional company providing solutions to all moving your
              needs since 2015. Our professional staff assure you to provide an
              awesome moving experience in your budget. We offer household
              moving, office moving, car transport and bike transport for local
              & domestic relocation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Our Services</a></li> 
              <li><a href="/feature">Features</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="footer-col">
            <h3>Address :</h3>
            <p>
              Plot No. 109 Durga vihar,<br />Nangal jesa bohara,<br />
            Jhotwara, Jaipur – 302012
            </p>
            <p>Mob: (+91)9 251 202 201  </p>
            <p>Services: 24/7 </p>
          </div>

        </div>
      </footer>

     
    </>
  );
};

export default Footer;
