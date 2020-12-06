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
    return {
      title: formattedDateSingleLine(item.year, item.month, item.date),
      path: require(`../images/${item.image}`).default,
      author: item.imageAuthor,
      link: item.imageSource,
    };
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
              const image = getImageInfo(item);
              return (
                <Router>
                  <Link to={`/${item.image}`}>
                    <img
                      id="image-thumbnail"
                      src={image.path}
                      alt={image.title}
                    />
                  </Link>
                  <Route
                    exact
                    path={`/${item.image}`}
                    render={(props) => <ImageModal {...props} image={image} />}
                  />
                </Router>
              );
            })()}
        </div>
      </Collapse>
    </>
  );
}
export default DetailPanel;
