import { User, Label } from './components';
import styles from "./app.module.css";

const getUSerFromServer = () => ({
    name: "Иван",
        age: 30,
        email: "iven@gmail.com",
        phone: "+373 999 999 00 00"
})

export const App = () => {
    const user = getUSerFromServer();

    return (
        <div className={styles.app}>
            <Label color={'red'}>Приложение</Label>
            <div>Разная информация приложения </div>
            {/*<User name={user.name} age={user.age} email={user.email} phone={user.phone} />*/}
            <User {...user} />   можно итак написать сократив запись
        </div>
  );
};

