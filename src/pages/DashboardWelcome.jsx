import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import CountUp from "react-countup";
import { FiList, FiPlusCircle, FiUser } from "react-icons/fi";

const DashboardWelcome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`https://roommate-finder-server-xi.vercel.app/dashboard-stats?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setStats(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to load dashboard stats:", err);
      setLoading(false);
    });
}, [user?.email]);


  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
      <p className="text-gray-600 mb-10">
        Hello <span className="font-semibold">{user?.displayName || "User"}</span>, here’s a quick overview.
      </p>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading stats...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <FiList className="text-2xl text-accent" />
              <h3 className="text-lg font-semibold">Total Listings</h3>
            </div>
            <p className="text-3xl font-bold text-accent">
              <CountUp end={stats?.totalListings || 0} duration={2} />+
            </p>
          </div>

          <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <FiPlusCircle className="text-2xl text-success" />
              <h3 className="text-lg font-semibold">New This Month</h3>
            </div>
            <p className="text-3xl font-bold text-success">
              <CountUp end={stats?.newThisMonth || 0} duration={2} />+
            </p>
          </div>

          <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <FiUser className="text-2xl text-primary" />
              <h3 className="text-lg font-semibold">Profile Completeness</h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={stats?.profileCompletion || 0} duration={2} />%
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardWelcome;
