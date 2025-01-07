import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { ImageInfo } from "../../data/ImageData";
import "./DetailPanel.css";

type DetailPanelProps = {
  detail?: string;
  imageInfos?: ImageInfo[];
};

const DetailPanel: React.FC<DetailPanelProps> = ({ detail, imageInfos }) => {
  const [open, setOpen] = useState(false);

  const executeScroll = () => {
    //Lazyload observe the scroll to load component
    window.scrollBy(0, 1);
  };

  const handleButtonClick = () => {
    setOpen(!open);
    if (!open) {
      executeScroll();
    }
  };

  return (
    <>
      <Button
        variant="link"
        size="sm"
        onClick={handleButtonClick}
        aria-controls="collapse-content"
        aria-expanded={open}
      >
        {open ? "收起 ▲" : "展开 ▼"}
      </Button>
      <Collapse in={open}>
        <div id="collapse-content">
          {detail && <div className="detail-text">{detail}</div>}
          {imageInfos && (
            <LazyLoad height={100} once>
              {imageInfos.map((image, idx) => (
                <React.Fragment key={idx}>
                  <br />
                  <Link to={`/${image.name}`}>
                    <img
                      id="image-thumbnail"
                      src={image.src}
                      alt={image.title}
                    />
                  </Link>
                  <br />
                </React.Fragment>
              ))}
            </LazyLoad>
          )}
        </div>
      </Collapse>
    </>
  );
};
export default DetailPanel;
