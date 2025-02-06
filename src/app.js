import PropTypes from 'prop-types';
import {useState} from "react";

const Product = ({name, price, amount}) => {
    // const [amount, setAmount] = useState(initialAmount);
    // amount - может быть и родительским компонентом и передваться в компонент

    return (
    <>
        <div>
            {name} - {price} руб
        < /div>
        <div>Количество: {amount}</div>
        <Backet amount={amount} />
    </>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
};
//////////////////////////////////////// props(родительские 'внешние' данные) и состояния(компонентные данные)



