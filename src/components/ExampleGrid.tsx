import React from 'react';
import {Typography} from "@mui/material";
import styles from './ExampleGrid.module.css'

const ExampleGrid = () => {
    return (
        <div className={styles.container} style={{paddingTop: '100px'}}>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Block</Typography>
                <img alt={'image'} src={"game-patterns/block.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Tub</Typography>
                <img alt={'image'} src={"game-patterns/tub.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Boat</Typography>
                <img alt={'image'} src={"game-patterns/boat.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Barge</Typography>
                <img alt={'image'} src={"game-patterns/barge.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Bee hive</Typography>
                <img alt={'image'} src={"game-patterns/beehive.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Loaf</Typography>
                <img alt={'image'} src={"game-patterns/loaf.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Snake</Typography>
                <img alt={'image'} src={"game-patterns/snake.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Fish hook</Typography>
                <img alt={'image'} src={"game-patterns/fishhook.png"} width={100}/>
            </div>
            <div className={styles.item}>
                <Typography style={{color: '#1d77d2'}} align='center'>Ship</Typography>
                <img alt={'image'} src={"game-patterns/ship.png"} width={100}/>
            </div>
        </div>
    );
}

export default ExampleGrid;
