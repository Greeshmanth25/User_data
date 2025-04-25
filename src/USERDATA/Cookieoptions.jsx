import React, { useState, useEffect } from 'react';

const COOKIE_OPTIONS = [
  "Functionality",
  "Analytics Storage",
  "Ad Storage",
  "Ad User Data",
  "Ad Personalisation",
  "Personalization Storage",
  "Security Storage"
];

const Cookieoptions = () => {
  const [checked, setChecked] = useState({
    "Functionality": false,
    "Analytics Storage": false,
    "Ad Storage": true,
    "Ad User Data": true,
    "Ad Personalisation": true,
    "Personalization Storage": true,
    "Security Storage": true
  });

  const handleToggle = (key) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCancel = () => {
    console.log("Cancelled cookie settings.");
  };

  const handleDone = () => {
    console.log("Saved cookie settings:", checked);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cookie Settings</h2>
      <p style={styles.description}>
        We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.
      </p>
      <p>
        <a href="/privacy-policy" style={styles.link}>See our Privacy Policy.</a>
      </p>

      <div style={styles.checkboxList}>
        {COOKIE_OPTIONS.map(option => (
          <label key={option} style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={checked[option]}
              onChange={() => handleToggle(option)}
              style={styles.checkbox}
            />
            {option}
          </label>
        ))}
      </div>

      <div style={styles.buttonRow}>
        <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
        <button onClick={handleDone} style={styles.doneButton}>Done</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'left',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '5px',
  },
  link: {
    textDecoration: 'underline',
    color: '#000',
    fontSize: '16px',
  },
  checkboxList: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  checkboxLabel: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  checkbox: {
    width: '20px',
    height: '20px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'left',
    gap: '20px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  cancelButton: {
    padding: '10px 25px',
    border: '2px solid black',
    backgroundColor: 'transparent',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  doneButton: {
    padding: '10px 25px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default Cookieoptions;