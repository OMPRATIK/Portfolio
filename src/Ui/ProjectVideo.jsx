import PropTypes from "prop-types";

function ProjectVideo({ src }) {
  console.log(src);
  return (
    <video controls className="w-full rounded-md">
      <source src={src} type="video/mp4" />
    </video>
  );
}

ProjectVideo.propTypes = {
  src: PropTypes.string,
};

export default ProjectVideo;
