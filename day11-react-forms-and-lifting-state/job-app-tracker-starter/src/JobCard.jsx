import { PropTypes } from "prop-types";

function JobCard({ job }) {
  // pull data from argument
  const {
    id,
    image: { src, alt },
    company,
    title,
    minSalary,
    maxSalary,
    location,
    postDate,
  } = job;

  return (
    <div data-testid="job-card" className="flex items-start gap-4 my-13">
      <img src={src} alt={alt} />
      <div>
        <h2 className="text-xl font-bold relative -top-1.5" data-testid={id}>
          {title}
        </h2>
        <p className="text-gray-400 italic mb-2">{company}</p>
        <ul className="text-sm">
          <li>{location}</li>
          <li>{`$${minSalary} - $${maxSalary}`}</li>
          <li>{postDate}</li>
        </ul>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    company: PropTypes.string,
    title: PropTypes.string,
    minSalary: PropTypes.number,
    maxSalary: PropTypes.number,
    location: PropTypes.string,
    postDate: PropTypes.string,
  }),
};

export default JobCard;
