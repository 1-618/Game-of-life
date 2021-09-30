import React from 'react';
import Menu from "../components/Menu";
import styles from "../App.module.css";
import AboutComponent from "../components/AboutComponent";

const About = () => {
    return (
        <div className={styles.App} style={{height: '100vh'}}>
        <Menu/>
        <AboutComponent/>
        </div>
    );
};

export default About;
