import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components" ;

export const Cart = () => {
  useTitle("Cart");
  
  const products= [
    {"id": 1, "name": "Sony Wh-Ch150 Bluetooth Wireless", "price": 1490, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "Boat Rocker 450", "price": 4149, "image": "/assets/images/1002.png"},
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) =>(
         <CartCard key={products.id} product={product} />
          ))}
        </section>
    </main>
  )
}
