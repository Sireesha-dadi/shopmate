import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
    useTitle("Home");
  const products= [
    {"id": 1, "name": "Sony Wh-Ch150 Bluetooth Wireless", "price": 1490, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "Boat Rocker 450", "price": 4149, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760c", "price": 1349, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 2149, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 2449, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zed-Thunder Wired", "price": 1449, "image": "/assets/images/1006.png"},
    
  ]
  return(
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </section>
    </main>
  )
}
