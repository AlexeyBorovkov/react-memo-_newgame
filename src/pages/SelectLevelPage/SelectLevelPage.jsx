import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext, useEffect } from "react";
import { LevelContext } from "../../context/levelContext";
import { LivesContext } from "../../context/livesContext";

export function SelectLevelPage() {
  const { setLevel } = useContext(LevelContext);
  const { setLives } = useContext(LivesContext);

  const livesChangeHandler = event => {
    setLives(event.target.checked ? 3 : 0);
  };

  useEffect(() => {
    setLives(0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li onClick={() => setLevel(1)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li onClick={() => setLevel(2)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li onClick={() => setLevel(3)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.wrap}>
          <h3 className={styles.subtitle}>Дополнительные попытки</h3>
          <input onClick={livesChangeHandler} type="checkbox" />
        </div>
      </div>
    </div>
  );
}
