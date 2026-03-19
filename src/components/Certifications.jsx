/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { certifications } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const CertificationCard = ({ certification }) => {
    const hasCertificateLink = Boolean(certification.certificateLink);
    
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={certification.date}
            iconStyle={{ background: certification.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={certification.icon}
                        alt={certification.organization}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{certification.title}</h3>
                <p className="text-secondary text-[20px] font-semibold" style={{ margin: 0 }}>{certification.organization}</p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {certification.points.map((point, index) => (
                    <li
                        key={`certification-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>

            <div className="mt-5">
                {hasCertificateLink ? (
                    <a
                        href={certification.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-md bg-[#02a3eb] text-white text-[14px] font-semibold hover:bg-[#0188c7] transition-colors duration-300"
                    >
                        View Certificate
                    </a>
                ) : (
                    <button
                        type="button"
                        disabled
                        className="inline-block px-4 py-2 rounded-md bg-gray-600 text-gray-300 text-[14px] font-semibold cursor-not-allowed"
                    >
                        Certificate Link Not Added
                    </button>
                )}
            </div>
        </VerticalTimelineElement>
    );
};

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My achievements</p>
                <h2 className={styles.sectionHeadText}>Certifications.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {certifications.map((certification, index) => (
                        <CertificationCard key={index} certification={certification} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default SectionWrapper(Certifications, "certifications");
