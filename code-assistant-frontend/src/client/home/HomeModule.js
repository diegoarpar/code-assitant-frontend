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
    <div className="text-center">
      <header className="header-assistant">
        <h1>Welcome to the Java Code Assistant</h1>
      </header>
      <main >
        <section className="pt-5">
          <span >
            Our system is designed to help developers streamline their Java development process by providing intelligent code suggestions, refactoring assistance, and best practices to write efficient, clean, and maintainable code.
          </span>
        </section>

        <section style={styles.featuresSection}>
          <h3 className="pt-5">Features</h3>
          <ul>
            <span>Code generation and completion</span> <br/>
            <span>Automatic code refactoring</span><br/>
            <span>Performance improvements suggestions</span><br/>
            <span>Best practices recommendations for Java development</span><br/>
          </ul>
        </section>

        <section >
          <h3 className="pt-5">How It Works</h3>
          <span>
            The Java Code Assistant integrates seamlessly into your Java development environment, analyzing your code in real-time. 
            It suggests optimizations, offers refactoring options, and helps ensure your code adheres to industry standards.
          </span>
        </section>
      </main>
    </div>
  );
};

export default HomeModule;