import  {useState} from 'react';
import styles from './app.module.css';

const Counter =({value, setValue}) => {
    return (
        <>
            <div>{value}</div>
            <button onClick={() => setValue(value +1)}>{value}+ 1</button>
        </>
    );
};

export const App = () => {
    const [value, setValue] = useState(0);

    return (
        <div className={styles.app}>
            <label>Счетчик: {value}</label>
            <Counter value={value} setValue={setValue}/>
        </div>
    );
};

// Single source of truth - в компоненте могут использоваться данные из разных источнков
// Разные источники обновляются по разному
// Источником из двух состояний выбираем то , что выше(родительский)
// Мнемонизация - способность сохранять возвращаемые данные в память




