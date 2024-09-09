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
  introSection: {
    marginBottom: '30px',
  },
  featuresSection: {
    marginBottom: '30px',
  },
  howItWorksSection: {
    marginBottom: '30px',
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

const HomeModule = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Java Code Assistant</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.introSection}>
          <h2>Welcome to the Java Code Assistant</h2>
          <p>
            Our system is designed to help developers streamline their Java development process by providing intelligent code suggestions, refactoring assistance, and best practices to write efficient, clean, and maintainable code.
          </p>
        </section>

        <section style={styles.featuresSection}>
          <h3>Features</h3>
          <ul>
            <li>Code generation and completion</li>
            <li>Automatic code refactoring</li>
            <li>Performance improvements suggestions</li>
            <li>Best practices recommendations for Java development</li>
          </ul>
        </section>

        <section style={styles.howItWorksSection}>
          <h3>How It Works</h3>
          <p>
            The Java Code Assistant integrates seamlessly into your Java development environment, analyzing your code in real-time. 
            It suggests optimizations, offers refactoring options, and helps ensure your code adheres to industry standards.
          </p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Java Code Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeModule;