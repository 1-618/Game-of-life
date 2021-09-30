import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <AppBar style={{
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 4px )',
            paddingTop: '15px',
            paddingBottom: '15px',
        }}>
            <div className={styles.menuContainer}>
                <Button style={{fontWeight: 'bolder'}} >
                    <Link style={{textDecoration: 'none', color: '#1d77d2'}} to="/">About</Link>
                </Button>
                <Button style={{fontWeight: 'bolder'}}>
                    <Link style={{textDecoration: 'none', color: '#1d77d2'}} to="/play">Play</Link>
                </Button>
                <Button style={{fontWeight: 'bolder'}}>
                <Link style={{textDecoration: 'none', color: '#1d77d2'}} to="/examples">Examples</Link>
                </Button>
            </div>
        </AppBar>
    )
}

export default Menu;
