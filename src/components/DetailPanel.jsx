import React, { useState, useEffect } from "react";
import { Collapse, Button } from "react-bootstrap";
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
    <div>
      <Button
        variant="link"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-content"
        aria-expanded={open}
      >
        {open ? "更多 ▲" : "更多 ▼"}
      </Button>
      <Collapse in={open}>
        <div id="collapse-content">
          {item.image && <ImageModal image={getImageInfo(item)} />}
        </div>
      </Collapse>
    </div>
  );
}
export default DetailPanel;
