import { LuShoppingCart } from "react-icons/lu";


const Cart = () => {
    return (
        <div>
            <h1><LuShoppingCart />장바구니</h1>
            <p>결제 금액에 따른 구매 금액별 사은품 증정</p>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

export default Cart;