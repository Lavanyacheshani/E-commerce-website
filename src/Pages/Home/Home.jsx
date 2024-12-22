import Ads from './Ads.jsx';
import Product from './Product.jsx';

const Home = () => {
  return (
    <div className="p-5 pt-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Trending Products"  />
      <Product title="Shoes" />
      <Product title="Watches" />

    </div>
  );
};

export default Home;
