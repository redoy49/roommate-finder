import { useLoaderData } from "react-router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaUsers,
  FaCalendarCheck,
  FaHeart,
} from "react-icons/fa";

const Details = () => {
  const list = useLoaderData();
  const { user } = useContext(AuthContext);

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
    email,
    image,
  } = list;

  const [like, setLike] = useState(likeCount || 0);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    if (user?.email === email) {
      toast.error("You cannot like your post.");
      return;
    }

    fetch(`https://roommate-finder-server-xi.vercel.app/lists/${_id}/like`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likeCount: like }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLike((count) => count + 1);
          setShowContact(true);
          toast.success("Liked successfully");
        }
      })
      .catch(() => toast.error("Failed to like the post."));
  };

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-8 px-2">
        <h2 className="text-3xl md:text-4xl font-bold">
          Roommate Listing Details
        </h2>
        <p className="text-base-content/70 mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Discover everything you need to know about this listing. Find the right room and lifestyle that fits your needs.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg aspect-video"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/E5E7EB/6B7280?text=No+Image";
              e.target.alt = "No image available";
            }}
          />
        </div>

        <div className="w-full flex flex-col justify-center space-y-4 text-base-content">
          <h2 className="text-2xl font-semibold text-center text-secondary">
            <FaHeart className="inline-block mr-2 text-error" />
            {like} people interested
          </h2>

          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>{location}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaMoneyBillWave className="text-success" />
            <span>${rent}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaBed className="text-secondary" />
            <span>{roomType}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaUsers className="text-accent" />
            <span>{lifestyle}</span>
          </p>

          <p className="text-base leading-relaxed">
            <strong>Description:</strong> {description}
          </p>

          <p className="flex items-center gap-2">
            <FaCalendarCheck className="text-info" />
            <span>
              {availability === "Available" ? "Available" : "Not available"}
            </span>
          </p>

          <button
            className="btn btn-secondary w-full text-base h-12"
            onClick={handleLike}
          >
            Like This Post
          </button>

          {showContact && (
            <p className="text-center font-semibold text-base mt-4">
              <strong>Contact Info:</strong> {contact}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
