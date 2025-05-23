// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseLists = () => {
  const lists = useLoaderData();

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://your-vercel-server.vercel.app/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="text-center my-10">
  //       <span className="loading loading-spinner text-primary"></span>
  //     </div>
  //   );
  // }

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
