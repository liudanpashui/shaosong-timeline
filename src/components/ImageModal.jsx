import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import "./ImageModal.css";

const ImageModal = ({ image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image src={image.path} fluid onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        dialogClassName="image-modal"
        aria-labelledby="image-modal-title"
        centered
      >
        <Modal.Header closeButton bsPrefix="image-modal-header">
          <Modal.Title id="image-modal-title" as="span">
            {image.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body bsPrefix="image-modal-body">
          <Image src={image.path} fluid />
        </Modal.Body>
        <Modal.Footer bsPrefix="image-modal-footer">
          <span>
            作者：
            {image.link ? (
              <a href={image.link}>{image.author}</a>
            ) : (
              <span>{image.author}</span>
            )}
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ImageModal;
