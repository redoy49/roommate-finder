import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const MyLists = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/lists/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/lists/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const newLists = lists.filter((list) => list._id !== _id);
              setLists(newLists);
              console.log("After delete :", data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
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
              <td>{list.rent}</td>
              <td>{list.roomType}</td>
              <td>
                <Link to={`/update/${list._id}`}>
                  <MdUpdate className="cursor-pointer" size={20} />
                </Link>
              </td>
              <td>
                <MdDelete
                  onClick={() => handleDelete(list._id)}
                  className="cursor-pointer"
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
