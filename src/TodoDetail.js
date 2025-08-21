import { useParams } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';

export default function TodoDetail(props) {

    const { key } = useParams();
    console.log(props.getDeed(key));
    const deed = props.getDeed(key);


    // Проверяем наличие данных
    if (!deed) {
        return <section>Задача не найдена или загружается...</section>;
    }
    if (!this.props.currentUser)
        return <Navigate to="/login" replace />
    else
        return (
            <section>
                {deed.done &&
                    <p className="has-text-success">
                        Выполнено
                    </p>
                }
                <h1>{deed.title}</h1>
                <p>{deed.createAt}</p>
                {deed.desc && <p>{deed.desc}</p>}
                {deed.image && <p><img src={deed.image}
                    alt="Иллюстрация" /></p>}
            </section>
        );
}