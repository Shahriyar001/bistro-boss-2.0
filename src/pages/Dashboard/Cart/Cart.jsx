import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h2 className="text-4xl">Items: {cart.length}</h2>
      <h2 className="text-4xl">total Price: {totalPrice}</h2>
      <button className="btn btn-primary">Pay</button>
    </div>
  );
};

export default Cart;
