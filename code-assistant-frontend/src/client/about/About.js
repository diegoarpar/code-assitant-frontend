import React from "react";

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    margin: '0',
    padding: '0',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  main: {
    padding: '20px',
  },
  infoSection: {
    marginBottom: '30px',
  },
  missionSection: {
    marginBottom: '30px',
  },
  contactSection: {
    marginBottom: '30px',
  },
  email: {
    fontSize: '18px',
    color: '#333',
  },
  footer: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
};
const About = () => {
  return (

    <div id="about" className="min-vh-100">
    <header className="header-assistant">
      <h1>About Us</h1>
    </header>
    <main className="text-center">
      <section >
        <h2 className="pt-5">Who We Are</h2>
        <span>
          We are a team of passionate developers dedicated to making Java development faster, more efficient, and easier. Our Java Code Assistant was created to empower developers with tools that help them write cleaner, more maintainable code while saving time.
        </span>
      </section>

      <section >
        <h3 className="pt-5">Our Mission</h3>
        <span>
          Our mission is to provide innovative, AI-driven solutions that streamline the coding experience for Java developers, helping them focus more on logic and creativity rather than repetitive tasks.
        </span>
      </section>

      <section >
        <h3 className="pt-5">Contact Us</h3>
        <span>
          We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:
        </span>
        <span>
          <strong>Email:</strong> <a href="mailto:diegoarpar@gmail.com">diegoarpar@gmail.com</a>
          <strong>DIEGO ARMANDO PADILLA RAMIREZ</strong>
        </span>
      </section>
    </main>
    
  </div>

  );
};
export default About;