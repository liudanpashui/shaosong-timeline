import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailPanel.css";
import ImageModal from "./ImageModal";

function DetailPanel({ detail, imageInfos }) {
  const [open, setOpen] = useState(false);

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
          {detail && <div className="detail-text">{detail}</div>}
          {imageInfos && (
            <LazyLoad height={100} once>
              {imageInfos.map((image, idx) => {
                return (
                  <Router key={idx}>
                    <br />
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
          )}
        </div>
      </Collapse>
    </>
  );
}
export default DetailPanel;
