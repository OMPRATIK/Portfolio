import { useState } from "react";
import { Link } from "react-router-dom";
import { TbPinnedFilled } from "react-icons/tb";

import SubHeading from "../components/SubHeading";
import Carousel from "../components/Carousel";
import projects from "../data/projects";
import Project from "./Project.jsx";

function PinnedProjects() {
  const [itemIdx, setItemIdx] = useState(0);
  const pinnedProjects = projects.slice(0, 3);
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading="Pinned Projects" icon={<TbPinnedFilled />} />

        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="/projects"
        >
          <span>More Projects</span>
          <span className="text-xl">&rarr;</span>
        </Link>
      </div>

      <Carousel
        numItemInFrame={1}
        items={pinnedProjects}
        size={pinnedProjects.length}
        setItemIdx={setItemIdx}
        itemIdx={itemIdx}
      >
        {pinnedProjects.map(
          ({
            name,
            image,
            status,
            contributors,
            description,
            skills,
            github,
            link,
            video,
          }) => {
            return (
              <Project
                key={name}
                name={name}
                image={image}
                status={status}
                contributors={contributors}
                description={description}
                skills={skills}
                github={github}
                link={link}
                video={video}
              />
            );
          },
        )}
      </Carousel>
    </section>
  );
}

export default PinnedProjects;
