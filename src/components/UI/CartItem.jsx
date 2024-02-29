import { currencyFormatter } from "../../Util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrese,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {price}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrese}>+</button>
      </p>
    </li>
  );
}
