import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { AuthContext } from "../provider/AuthContext";
 
const Details = () => {
  const list = useLoaderData();
  useEffect(() => {
      document.title = "Card Details";
    }, []);
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
    likeCount,
  } = list;
 
  const [like, setLike] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    fetch(`http://localhost:3000/lists/${_id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount: like }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLike((prev) => prev + 1);
          setShowContact(true);
          toast.success("Liked successfully");
        }
      })
      .catch(() => toast.error("Failed to like the post."));
  };

  return (
    <div className="flex justify-center items-center md:my-14">
      <div className="card-body border border-slate-300 max-w-md text-base space-y-2">
        <h2 className="text-3xl font-bold mb-5 text-center">
          {likeCount || 0} people interested in
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
          onClick={handleLike}
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
