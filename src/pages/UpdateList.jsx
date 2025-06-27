import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateList = () => {
  const list = useLoaderData();
  useEffect(() => {
    document.title = "Update Post";
  }, []);

  const { _id } = list;
  const { user } = useContext(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newLists = Object.fromEntries(formData.entries());

    fetch(`https://roommate-finder-server-xi.vercel.app/lists/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLists),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Post Successfully.",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch(() => {
        toast.error("Update Post Failed.");
      });
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex justify-center items-start bg-base-100 text-base-content">
      <div className="w-full max-w-4xl bg-base-200 rounded-xl shadow-xl p-8">
        <h2 className="text-2xl text-center font-bold mb-5 text-secondary">
          Update Post Details
        </h2>

        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input input-bordered w-full"
            name="title"
            type="text"
            placeholder="Title"
            required
            defaultValue={list?.title}
          />
          <input
            className="input input-bordered w-full"
            name="location"
            type="text"
            placeholder="Location"
            required
            defaultValue={list?.location}
          />
          <input
            className="input input-bordered w-full"
            name="rent"
            type="number"
            placeholder="Rent Amount"
            required
            defaultValue={list?.rent}
          />
          <select
            className="select select-bordered w-full"
            name="roomType"
            required
            defaultValue={list?.roomType}
          >
            <option disabled>Select Room Type</option>
            <option>Single</option>
            <option>Shared</option>
          </select>
          <input
            className="input input-bordered w-full"
            name="lifestyle"
            type="text"
            placeholder="Lifestyle Preferences"
            required
            defaultValue={list?.lifestyle}
          />
          <input
            className="input input-bordered w-full"
            name="contact"
            type="text"
            placeholder="Contact Info"
            required
            defaultValue={list?.contact}
          />
          <select
            className="select select-bordered w-full"
            name="availability"
            required
            defaultValue={list?.availability}
          >
            <option disabled>Select Availability</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>

          <textarea
            className="textarea textarea-bordered w-full col-span-full"
            name="description"
            placeholder="Bio"
            required
            defaultValue={list?.description}
          ></textarea>

          <input
            className="input input-bordered w-full"
            type="text"
            defaultValue={user.displayName}
            disabled
          />
          <input
            className="input input-bordered w-full"
            type="text"
            defaultValue={user.email}
            disabled
          />

          <button
            type="submit"
            className="btn btn-secondary w-full col-span-full"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
