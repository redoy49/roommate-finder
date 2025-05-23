import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdUpdate } from "react-icons/md";

const MyLists = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  console.log(lists);

  useEffect(() => {
    fetch(`http://localhost:3000/lists/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

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
                <Link to={`/card-details/${list._id}`}>
                  <MdUpdate className="cursor-pointer" size={20} />
                </Link>
              </td>
              <td>
                <MdDelete className="cursor-pointer" size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyLists;
