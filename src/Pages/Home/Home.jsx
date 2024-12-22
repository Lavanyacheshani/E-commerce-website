import { useState } from 'react';
import Ads from './Ads.jsx';
import Product from './Product.jsx';
import Loading from '../../components/Loading/Loading.jsx';

const Home = () => {
  const [loading, setLoading] = useState(false);
  if(loading) return <Loading />
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
