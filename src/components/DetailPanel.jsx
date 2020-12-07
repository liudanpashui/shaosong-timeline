import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailPanel.css";
import ImageModal from "./ImageModal";
import { formattedDateSingleLine } from "../utils/dateUtil";

function DetailPanel({ item }) {
  const [open, setOpen] = useState(false);

  const getImageInfo = (item) => {
    const imageNames = Array.isArray(item.image) ? item.image : [item.image];
    const imageAuthors = Array.isArray(item.imageAuthor)
      ? item.imageAuthor
      : [item.imageAuthor];
    const imageSources = Array.isArray(item.imageSource)
      ? item.imageSource
      : [item.imageSource];

    return imageNames.map((_, index) => {
      return {
        name: imageNames[index],
        title: formattedDateSingleLine(item.year, item.month, item.date),
        path: require(`../images/${imageNames[index]}.png`).default,
        author: imageAuthors[index],
        link: imageSources[index],
      };
    });
  };

  const executeScroll = () => {
    //Lazyload observe the scroll to load component
    window.scrollBy(0, 1);
  };

  return (
    <>
      <Button
        variant="link"
        size="sm"
        onClick={() => {
          setOpen(!open);
          !open && executeScroll();
        }}
        aria-controls="collapse-content"
        aria-expanded={open}
      >
        {open ? "收起 ▲" : "展开 ▼"}
      </Button>
      <Collapse in={open}>
        <div id="collapse-content">
          {item.detail && (
            <div className="detail-text">
              {item.detail.replace("\\n", "\n")}
            </div>
          )}
          {item.image &&
            (() => {
              const images = getImageInfo(item);
              return (
                <LazyLoad height={100} once>
                  {images.map((image, idx) => {
                    return (
                      <Router key={idx}>
                        <Link to={`/${image.name}`}>
                          <img
                            id="image-thumbnail"
                            src={image.path}
                            alt={image.title}
                          />
                        </Link>
                        <Route
                          exact
                          path={`/${image.name}`}
                          render={(props) => (
                            <ImageModal {...props} image={image} />
                          )}
                        />
                        <br />
                      </Router>
                    );
                  })}
                </LazyLoad>
              );
            })()}
        </div>
      </Collapse>
    </>
  );
}
export default DetailPanel;
