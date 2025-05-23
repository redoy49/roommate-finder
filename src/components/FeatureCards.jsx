import { Link } from "react-router";
import FeatureCard from "./FeatureCard";
import { Fade } from "react-awesome-reveal";

const FeatureLists = ({ lists }) => {
  return (
    <section className="my-24 p-2">
      <h2 className="text-3xl font-bold text-center mb-12">
        <Fade delay={1e3} cascade damping={1e-1}>
          Featured Roommates Section
        </Fade>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lists.map((list) => (
          <FeatureCard key={list._id} list={list} />
        ))}
      </div>
    </section>
  );
};

export default FeatureLists;
