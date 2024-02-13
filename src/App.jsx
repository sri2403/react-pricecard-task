import React from 'react';
import PriceCard from './components/PriceCard.jsx';
import './components/PriceCard.css'
import './App.css';
const App = () => {
  const dataObj = [
    {
      title: "FREE",
      price: "$0",
      features: [
        { text: "Single User", icon: "fa fa-check" },
        { text: "5GB Storage", icon: "fa fa-check" },
        { text: "Unlimited Public Projects", icon: "fa fa-check" },
        { text: "Community Access", icon: "fa fa-check" },
        { text: "Unlimited Private Projects", icon: "fa fa-times" },
        { text: "Dedicated Phone Support", icon: "fa fa-times" },
        { text: "Free Subdomain", icon: "fa fa-times" },
        { text: "Monthly Status Reports", icon: "fa fa-times" }
      ]
    },
    {
      title: "PLUS",
      price: "$9",
      features: [
        { text: "5 Users", icon: "fa fa-check" },
        { text: "50GB Storage", icon: "fa fa-check" },
        { text: "Unlimited Public Projects", icon: "fa fa-check" },
        { text: "Community Access", icon: "fa fa-check" },
        { text: "Unlimited Private Projects", icon: "fa fa-check" },
        { text: "Dedicated Phone Support", icon: "fa fa-check" },
        { text: "Free Subdomain", icon: "fa fa-check" },
        { text: "Monthly Status Reports", icon: "fa fa-times" }
      ]
    },
    {
      title: "PRO",
      price: "$49",
      features: [
        { text: "Unlimited Users", icon: "fa fa-check" },
        { text: "150GB Storage", icon: "fa fa-check" },
        { text: "Unlimited Public Projects", icon: "fa fa-check" },
        { text: "Community Access", icon: "fa fa-check" },
        { text: "Unlimited Private Projects", icon: "fa fa-check" },
        { text: "Dedicated Phone Support", icon: "fa fa-check" },
        { text: "Free Subdomain", icon: "fa fa-check" },
        { text: "Monthly Status Reports", icon: "fa fa-check" }
      ]
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="row ">
          {dataObj.map((data, index) => (
            <PriceCard key={index} title={data.title} price={data.price} features={data.features} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
