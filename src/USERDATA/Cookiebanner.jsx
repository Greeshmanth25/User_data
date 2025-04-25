import React, { useState, useEffect } from 'react';

const Cookiebanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAcceptAll = () => {
    console.log("All cookies accepted.");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    console.log("All cookies rejected.");
    setIsVisible(false);
  };

  const handleManage = () => {
    console.log("Redirecting to cookie management...");
  };

  if (!isVisible) return null;

  return (
    <div style={{ ...styles.container, ...(isMobile ? styles.containerMobile : {}) }}>
      <h2 style={{ ...styles.heading, ...(isMobile ? styles.headingMobile : {}) }}>
        Cookie Settings
      </h2>

      <p style={{ ...styles.text, ...(isMobile ? styles.textMobile : {}) }}>
        We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.
      </p>

      <p style={styles.linkWrapper}>
        <a href="/privacy-policy" style={styles.link}>
          See our Privacy Policy.
        </a>
      </p>

      <div style={{ ...styles.buttonContainer, ...(isMobile ? styles.buttonContainerMobile : {}) }}>
        <button onClick={handleRejectAll} style={styles.outlineButton}>Reject All</button>
        <button onClick={handleManage} style={styles.outlineButton}>Manage</button>
        <button onClick={handleAcceptAll} style={styles.filledButton}>Accept All</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '30px',
    maxWidth: '800px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
    background: '#fff',
    textAlign: 'left',
  },
  containerMobile: {
    padding: '20px',
    margin: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  headingMobile: {
    fontSize: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  textMobile: {
    fontSize: '14px',
  },
  linkWrapper: {
    marginTop: '10px',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'underline',
    color: '#000',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  buttonContainerMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  outlineButton: {
    padding: '10px 20px',
    borderRadius: '30px',
    border: '2px solid #000',
    background: 'transparent',
    cursor: 'pointer',
    fontWeight: 'bold',
    minWidth: '120px',
    textAlign: 'center',
  },
  filledButton: {
    padding: '10px 20px',
    borderRadius: '30px',
    border: 'none',
    background: '#000',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    minWidth: '120px',
    textAlign: 'center',
  },
};

export default Cookiebanner;