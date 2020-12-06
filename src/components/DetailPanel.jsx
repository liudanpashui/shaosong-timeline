import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
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
        path: require(`../images/${imageNames[index]}`).default,
        author: imageAuthors[index],
        link: imageSources[index],
      };
    });
  };
  return (
    <>
      <Button
        variant="link"
        size="sm"
        onClick={() => setOpen(!open)}
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
              return images.map((image, _) => {
                return (
                  <Router>
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
              });
            })()}
        </div>
      </Collapse>
    </>
  );
}
export default DetailPanel;
