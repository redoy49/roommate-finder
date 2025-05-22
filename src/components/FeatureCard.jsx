import React from "react";
import { Link } from "react-router";

const FeatureCard = ({ list }) => {
  const { title, location, rent, roomType } = list;
  console.log(list);
  return (
    <div className="card border border-slate-300">
      <div className="card-body text-base">
        <h3 className="card-title font-bold">{title}</h3>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Rent:</strong> ${rent}
        </p>
        <p>
          <strong>Room Type:</strong> {roomType}
        </p>
        <div className="card-actions mt-4">
          <Link className="w-full" to={`/details/${list._id}`}>
            <button className="btn w-full text-base h-12 bg-violet-500 text-white">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
