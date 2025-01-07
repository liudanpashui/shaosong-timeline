import React from "react";
import { Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { ImageInfo } from "../../data/ImageData";
import "./ImageModal.css";

type ImageModalProps = {
  image: ImageInfo;
};

export const ImageModal: React.FC<ImageModalProps> = ({ image }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div className="image-modal-dialog" onClick={handleClose}>
      <TransformWrapper
        wheel={{ step: 100 }}
        doubleClick={{ mode: "reset" }}
        centerOnInit
      >
        <TransformComponent>
          <div className="image-modal-view">
            <div
              className="image-modal-container"
              onClick={handleContainerClick}
            >
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
                <Image src={image.src} fluid />
              </Modal.Body>
              <Modal.Footer bsPrefix="image-modal-footer">
                <span>
                  <a href={image.src} rel="noreferrer" target="_blank">
                    {"打开原图"}
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
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
export default ImageModal;
