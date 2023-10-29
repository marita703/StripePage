import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

function PricingCard({ price }) {
  const dynamicsubtitle = (price) => {
    if (price.nickname === "15 Yard dumpster") {
      return <p className="text-[#f1592a]">24 Hour-Special</p>;
    } else if (price.nickname === "10 yard dumpster") {
      return <p className="text-[#f1592a]">Friday through Monday</p>;
    } else if (price.nickname === "20 yard dumpster") {
      return <p className="text-[#f1592a]"> 3 day rental</p>;
    } else if (price.nickname === "15 yard dumpster-") {
      return <p className="text-[#f1592a]"> 3 day rental</p>;
    }
  };

  const dynamicDescription = (price) => {
    if (price.nickname === "15 Yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driverway Protection</h2>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "10 yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driverway Protection</h2>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "20 yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driverway Protection</h2>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "15 yard dumpster-") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrik-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driverway Protection</h2>
          </div>
          <div className="border" />
        </div>
      );
    }
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-gray-100 h-28 items-center font-bold ">
          <h4 className="text-3xl">{price.nickname}</h4>
          <p>{dynamicsubtitle(price)}</p>
          <h3>First 2000lbs included</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <h3>Aditional weight just $0.5/lb</h3>
            <ul className="flex justify-center">
              <li className="text-xl font-bold">{dynamicDescription(price)}</li>
            </ul>
            <button
              className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 pw-4 text-sm font-medium text-white shadow-sm"
              onClick={handleSubscription}
            >
              {" "}
              Rent this Dumpster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
