import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseLists = () => {
  const lists = useLoaderData();

  useEffect(() => {
    document.title = "Browse Lists";
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rent</th>
            <th>Room Type</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list._id}>
              <td>{list.title}</td>
              <td>{list.rent}</td>
              <td>{list.roomType}</td>
              <td>{list.location}</td>
              <td>
                <Link to={`/card-details/${list._id}`}>
                  <button className="btn btn-sm">See More</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseLists;
