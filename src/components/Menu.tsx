import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from  '@mui/material/Grid';
import {ExampleModal} from './ExampleModal';
import React from "react";
import { styled } from '@mui/material/styles';


/*const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});*/

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
                        <Grid container spacing={8} columns={12}>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/block.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt={'image'} src={"game-patterns/barge.png"} width={150}/>
                            </Grid>
                        </Grid>
                    </ExampleModal>
                </div>

            </div>
        </AppBar>
    );
}

export default Menu;
