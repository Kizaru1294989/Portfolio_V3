import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../Home/HomeBottom/styles";
import { experiences } from "../Home/HomeBottom/constants";
import { SectionWrapper } from "../Home/HomeBottom/hoc";
import { download, downloadHover, resume } from "../../try/assets";
import { textVariant } from "../Home/HomeBottom/utils/motion";
import RainEffect from "../Geometry/Cloud/Cloud";
import "./index.css";
// import { LineShadowTextDemo } from "../Text/Shadow/LineShadowTextDemo"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1f1f1f",
      color: "white",
      borderRadius : '20px',
      boxShadow:
        "0px 4px 10px rgba(0, 0, 0, 0.8)",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  white",
    }}
    date={
      <div>
        <h3 >
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3>
        {experience.title}
      </h3>
      <p

        style={{ margin: 0 , color : '#6cb4ee' }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      {/* <RainEffect/> */}
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
            What I've done so far
          </p> */}
        <h1
          style={{ color: "white", marginTop: "5rem" }}

        >
          Expérience Professionnelle
        </h1>
      </motion.div>

      <div
  className="card"
>
  <VerticalTimeline className="vertical-timeline-custom-line">
    {experiences.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </VerticalTimeline>
</div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
