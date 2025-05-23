import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateList = () => {
  const list = useLoaderData();

  useEffect(() => {
    document.title = "Update Post";
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
  } = list;
  console.log(list);
  const { user } = useContext(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    // const postData = {
    //   title: form.title.value,
    //   location: form.location.value,
    //   rent: form.rent.value,
    //   roomType: form.roomType.value,
    //   lifestyle: form.lifestyle.value,
    //   description: form.description.value,
    //   contact: form.contact.value,
    //   availability: form.availability.value,
    //   userEmail: user.email,
    //   userName: user.displayName,
    // };
    // console.log(postData);

    const formData = new FormData(form);
    const newLists = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/lists/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLists),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("Success:", data);
          Swal.fire({
            title: "Update post successfully.",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to save coffee");
      });
  };

  // try {
  //   setLoading(true);
  //   const res = await fetch("https://your-vercel-server.vercel.app/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //   });

  //   const data = await res.json();

  //   if (data.insertedId) {
  //     toast.success("Post added successfully!");
  //     form.reset();
  //   } else {
  //     toast.error("Failed to add post.");
  //   }
  // } catch (err) {
  //   toast.error(err.message);
  // } finally {
  //   setLoading(false);
  // }
  // };

  return (
    <div className="flex items-center justify-center bg-pink-50 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl text-center text-violet-500 font-bold mb-5">
          Update Post Details
        </h2>
        <form onSubmit={handleUpdate} className="grid gap-4">
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            name="title"
            defaultValue={title}
            type="text"
            placeholder="Title"
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            name="location"
            defaultValue={location}
            type="text"
            placeholder="Location"
            required
          />
          <input
            className="w-full px-4 h-12 border border-gray-300 rounded-sm"
            name="rent"
            defaultValue={rent}
            type="number"
            placeholder="Rent Amount"
            required
          />
          <select
            defaultValue={roomType}
            className="select w-full h-12 border border-gray-300 rounded-sm"
            name="roomType"
            required
          >
            <option disabled={true}>Select Room Type</option>
            <option>Single</option>
            <option>Shared</option>
          </select>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            name="lifestyle"
            defaultValue={lifestyle}
            type="text"
            placeholder="Lifestyle Preferences"
            required
          />
          <textarea
            className="textarea w-full px-4 py-3 border border-gray-300 rounded-sm"
            name="description"
            defaultValue={description}
            placeholder="Bio"
            required
          ></textarea>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            name="contact"
            defaultValue={contact}
            type="text"
            placeholder="Contact Info"
            required
          />
          <select
            defaultValue={availability}
            className="select w-full h-12 border border-gray-300 rounded-sm"
            name="availability"
            required
          >
            <option disabled={true}>Select Availabililty</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            type="text"
            defaultValue={user.displayName}
            disabled
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-sm"
            type="text"
            defaultValue={user.email}
            disabled
          />
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
