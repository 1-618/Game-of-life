import styles from './App.module.css';
import Game from "./pages/Game";

const App = () => {
    return (
        <div className={styles.App}>
        <Game/>
        </div>
    );
};

export default App;
