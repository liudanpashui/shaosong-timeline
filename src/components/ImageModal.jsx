import React from "react";
import { Modal, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./ImageModal.css";

const ImageModal = ({ image }) => {
  const history = useHistory();

  const handleClose = () => {
    history.goBack();
  };
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="image-modal-dialog" onClick={handleClose}>
      <TransformWrapper
        wheel={{ step: 100 }}
        doubleClick={{ mode: "reset" }}
        options={{ centerContent: false }}
      >
        <TransformComponent>
          <div className="image-modal-container" onClick={handleContainerClick}>
            <Modal.Header
              closeButton
              bsPrefix="image-modal-header"
              onHide={handleClose}
            >
              <Modal.Title id="image-modal-title" as="span">
                {image.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body bsPrefix="image-modal-body">
              <Image src={image.path} fluid />
            </Modal.Body>
            <Modal.Footer bsPrefix="image-modal-footer">
              <span>
                <a href={image.path} download>
                  {"下载原图"}
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {"作者："}
                {image.link ? (
                  <a href={image.link} rel="noreferrer" target="_blank">
                    {image.author}
                  </a>
                ) : (
                  <span>{image.author}</span>
                )}
              </span>
            </Modal.Footer>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
export default ImageModal;
