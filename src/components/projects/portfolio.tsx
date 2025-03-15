"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useProjects } from "@/hooks/useHome";
import ImageLightBox from "../common/image-lightbox";
import { Link } from "@/i18n/navigation";
import { CSSProperties } from "react";

// Define Project Type
interface Project {
  id: number;
  category: string;
  title: string;
  small_description: string;
  long_description: string;
  image: string;
  created_at: string;
}

// Image style
const imgStyle: CSSProperties = {
  width: "100%",
  height: "700px",
  objectFit: "cover",
};

const Portfolio = () => {
  const { data: projects, isLoading, isError } = useProjects();


  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const images = useMemo(() => {
    return projects ? projects.map((p: Project) => p.image) : [];
  }, [projects]);

  const handleImagePopup = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const projectList = useMemo(() => {
    if (!projects || isLoading || isError || projects.length === 0) return <p>No projects available.</p>;

    return projects.map((projects: Project, index: number) => {
      console.log("item" + projects);
      if (!projects) return null; // ✅ Prevents crashes if item is undefined

      return (
        <div key={projects.id} className="portfolio-item">
          <div className="portfolio-block-one mb-60 lg-mb-40">
            <div className="img-holder round-border">
              <Image
                src={projects.image || "/default-image.jpg"} // ✅ Fallback image
                style={imgStyle}
                alt={projects.title ? `${projects.title} project` : "Project Image"} // ✅ Avoids undefined error
                width={500}
                height={500}
                className="img-meta w-100 tran5s"
              />
              <button
                className="fancybox expend d-flex align-items-center justify-content-center tran3s cursor-pointer"
                title="Click for large view"
                onClick={() => handleImagePopup(index)}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
            <div className="caption">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <ul className="style-none d-flex tag">
                    <li>{projects.category || "Uncategorized"}</li>
                  </ul>
                  <h6>
                    <Link href={`/projects/${projects.id}`} className="pj-title">
                      {projects.title || "Untitled Project"}
                    </Link>
                  </h6>
                </div>
                <div>
                  <Link href={`/projects/${projects.id}`} className="arrow tran3s">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [projects, isLoading, isError]);

  return (
    <>
      <div className="portfolio-one position-relative pt-150 lg-pt-80 pb-100 lg-pb-60">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-7">
                <div className="title-four mb-80 lg-mb-40">
                  <h2>Our Recent Work & Portfolio.</h2>
                </div>
              </div>
            </div>
            <div id="isotop-gallery-wrapper" className="column-two">
              <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 572: 2, 992: 2 }}>
                <Masonry gutter="40px">{projectList}</Masonry>
              </ResponsiveMasonry>
            </div>
            <div className="section-btn md-mt-10">
              <Link href="/projects" className="btn-nine rounded-rect d-inline-flex align-items-center justify-content-center tran3s">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ImageLightBox
        images={images}
        visible={open}
        setVisible={setOpen}
        index={photoIndex}
        setIndex={setPhotoIndex}
      />
    </>
  );
};

export default Portfolio;
