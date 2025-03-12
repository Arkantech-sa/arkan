"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import ImageLightBox from "../common/image-lightbox";
import { Link } from "@/i18n/navigation";

// img style
import { CSSProperties } from "react";
import Pagination from "@/ui/pagination";
import usePagination from "@/hooks/use-pagination";
import { useProjects } from "@/hooks/useProjects";

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

const imgStyle: CSSProperties = {
  width: '100%',
  height: "700px",
  objectFit: "cover",
};
const PortfolioPage = () => {
  const { data: projects, isLoading, isError } = useProjects();

  const portfolio_items = projects.filter(
    (p: { portfolio: string; }) => p.portfolio === "portfolio-one"
  );
  const { currentItems, handlePageClick, pageCount } = usePagination(projects ?? [], 4);

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
      <div className="portfolio-one border-100 position-relative pt-150 lg-pt-80 pb-100 lg-pb-60">
        <div className="container">
          <div className="position-relative">
            <div id="isotop-gallery-wrapper" className="column-two">
              <div className="grid-sizer"></div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 572: 2, 992: 2 }}
              >
                <Masonry gutter="40px">
                  {projectList}
                </Masonry>
              </ResponsiveMasonry>
            </div>


            <div className="pagination-one border-top border-bottom pt-15 pb-15 mt-40 lg-mt-10">
              <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </div>
        </div>
      </div>
      {/* image light box start */}
      <ImageLightBox
        images={images}
        visible={open}
        setVisible={setOpen}
        index={photoIndex}
        setIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default PortfolioPage;
