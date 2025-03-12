"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Link } from "@/i18n/navigation";
// internal
import media_bg from '@/assets/images/media/img_36.jpg';
import screen from '@/assets/images/assets/screen_20.svg';
import icon_1 from '@/assets/images/icon/icon_85.svg';
import icon_2 from '@/assets/images/icon/icon_86.svg';
import icon_3 from '@/assets/images/icon/icon_87.svg';
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";
// gallery images
import gallery_1 from '@/assets/images/gallery/img_17.jpg';
import gallery_2 from '@/assets/images/gallery/img_18.jpg';
import gallery_3 from '@/assets/images/gallery/img_19.jpg';
import ProjectDetailsFeature from './project-details-feature';
import BreadcrumbOne from '../breadcrumb/breadcrumb-one';
import { useParams } from 'next/navigation';
import { useProjectDetails } from '@/hooks/useProjectDetails';
import { useProjects } from '@/hooks/useProjects';

// list item
function ListItem({ icon, text, sm_text }: { icon: StaticImageData; text: string; sm_text: string }) {
  return (
    <li className="d-flex">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <div className="text1">{text}</div>
        <span>{sm_text}</span>
      </div>
    </li>
  )
}

// img style 
const imgStyle = {
  height: 'auto'
}

const ProjectDetailsArea = () => {
  const { id } = useParams();
  const { data: projects, isLoading: isLoadingDetails, isError: isErrorDetails } = useProjectDetails(id as string | undefined);
  const { data: projectList, isLoading: isLoadingServices, isError: isErrorServices } = useProjects();

  return (
    <>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="Project Details"
        page={projects?.title || "Project"}
        bg_img={about_bg}
        shape={shape}
        style_2={true}
      />
      {/* breadcrumb end */}

      <div className="project-details-one position-relative pb-150 lg-pb-80">

        <div className="project-info position-relative mb-150 lg-mb-80">
          <div className="inner-wrapper m-auto">
            <div className="d-lg-flex align-items-center">
              <h3>Project <span>Details</span></h3>
              <ul className="style-none d-md-flex flex-fill ps-lg-5">
                <ListItem icon={icon_1} text='Date' sm_text={projects?.created_at} />
                <ListItem icon={icon_2} text='Client Name' sm_text='Mariona Adisson, USA' />
                <ListItem icon={icon_3} text='Project Type' sm_text={projects?.category} />
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <div className="upper-title">overview</div>
            <h2>Project Overview.</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: projects?.long_description || "" }} />
          <div className="img-gallery mb-60 lg-mb-40">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <Image src={projects?.image} width={500} height={500} alt={projects?.title || "Project Details Image"} className="lazy-img" style={imgStyle} />
              </div>
            </div>
          </div>
          <div>
            <div className="upper-title">Process</div>
            <h2>Research & Processing.</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
            {/* project details feature start */}
            <ProjectDetailsFeature />
            {/* project details feature end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsArea;