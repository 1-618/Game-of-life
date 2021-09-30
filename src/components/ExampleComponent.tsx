import React from 'react';
import {Typography} from "@mui/material";
import styles from './Examples.module.css'

const ExampleComponent = () => {
    return (
        <div className={styles.container} style={{paddingTop: '100px'}}>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Blinker</Typography>
                <img src={"game-patterns/blinker.png"} width={120} alt="blinker"/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Cross</Typography>
                <img src={"game-patterns/cross.png"} width={120} alt="cross"/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Glider</Typography>
                <img src={"game-patterns/glider.png"} width={120} alt="glider"/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Glider Gun</Typography>
                <img src={"game-patterns/gosper_glider_gun.png"} width={120} alt="gosper_glider"/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Spaceship</Typography>
                <img src={"game-patterns/lightweight_spaceship.png"} width={120} alt="spaceship"/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Traffic Light</Typography>
                <img src={"game-patterns/traffic_light.png"} width={120} alt="traffic_light"/>
            </div>

        </div>
    );
}

export default ExampleComponent;
