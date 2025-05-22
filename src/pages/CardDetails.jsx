import { useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Details = () => {
  const list = useLoaderData();
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    lifestyle,
    description,
    availability,
    contact,
  } = list;

   const [count, setCount] = useState(0);
   const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setShowContact(true)
  };

  // const [likeCount, setLikeCount] = useState(0);
  // const [showContact, setShowContact] = useState(false);

  // const handleLike = () => {
  //   fetch(`http://localhost:3000/lists/${_id}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ likeCount: likeCount }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         setLikeCount((prev) => prev + 1);
  //         setShowContact(true);
  //         toast.success("Liked successfully!");
  //       }
  //     })
  //     .catch(() => toast.error("Failed to like the post."));
  // };

  return (
    <div className="flex justify-center items-center md:my-14">
      <div className="card-body border border-slate-300 max-w-md text-base space-y-2">
        <h2 className="text-3xl font-bold mb-5 text-center">
          {count} people interested in
        </h2>
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
        <p>
          <strong>Lifestyle Preferences:</strong> {lifestyle}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Availability :</strong>{" "}
          {availability === "Available" ? "Available" : "Not available"}
        </p>
        <button
          className="btn w-full text-base h-12 bg-violet-500 text-white"
          onClick={handleClick}
        >
          Like
        </button>
        {showContact && (
          <p className="font-semibold">
            <strong> Contact Info :</strong>: {contact}
          </p>
        )}
      </div>
    </div>
  );
};

export default Details;
