import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {ExampleModal} from './ExampleModal';
import React from "react";
import styles from "../App.module.css";

const Menu = () => {
    const [isModalOpen, setModalState] = React.useState(false);

    const toggleModal = () => setModalState(!isModalOpen);
    return (
        <AppBar
            style={{background: 'rgba( 255, 255, 255, 0.25 )',
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                    backdropFilter: 'blur( 4px )',
                    paddingTop: '15px',
                    paddingBottom: '15px'}}>

            <div
                style={{display: "flex",
                        justifyContent: 'center',
                        fontWeight: 'bold'}}>
                <div>
                    <Button style={{fontWeight: 'bolder'}}
                        onClick={toggleModal}
                    >
                        About
                    </Button>
                    <ExampleModal
                        title={'This is my modal'}
                        isOpen={isModalOpen}
                        onClose={toggleModal}
                    >
                        This is an example modal content!
                        Watch whole video to see how to code it!
                    </ExampleModal>
                </div>
                <div>
                    <Button style={{fontWeight: 'bolder'}}
                        onClick={toggleModal}
                    >
                        Examples
                    </Button>
                    <ExampleModal
                        title={'This is my modal'}
                        isOpen={isModalOpen}
                        onClose={toggleModal}
                    >
                        This is an example modal content!
                        Watch whole video to see how to code it!
                    </ExampleModal>
                </div>

            </div>
        </AppBar>
    );
}

export default Menu;
