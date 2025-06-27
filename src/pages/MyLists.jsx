import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const MyLists = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Lists";

    if (!user?.email) return;

    fetch(`https://roommate-finder-server-xi.vercel.app/lists/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-xi.vercel.app/lists/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setLists((prev) => prev.filter((list) => list._id !== _id));
              Swal.fire("Deleted!", "Your post has been removed.", "success");
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  if (lists.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>You haven’t added any listings yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>Title</th>
            <th>Rent</th>
            <th>Room Type</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list._id}>
              <td>{list.title}</td>
              <td>${list.rent}</td>
              <td>
                <span className="badge badge-accent badge-outline">{list.roomType}</span>
              </td>
              <td>
                <Link to={`/dashboard/update/${list._id}`} className="text-blue-500 hover:text-blue-700">
                  <MdUpdate className="cursor-pointer" size={20} />
                </Link>
              </td>
              <td>
                <MdDelete
                  onClick={() => handleDelete(list._id)}
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  size={20}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyLists;
