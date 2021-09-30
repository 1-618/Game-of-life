import React from 'react';
import Menu from "../components/Menu";
import AboutGrid from "../components/AboutGrid";
import styles from "../App.module.css";

const About = () => {
    return (
        <div className={styles.App} style={{height: '100vh'}}>
        <Menu/>
        <AboutGrid/>
        </div>
    );
};

export default About;
