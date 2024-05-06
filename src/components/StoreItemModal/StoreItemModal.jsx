import "./storeItemModal.scss";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StoreItemModal({ onCloseClick, modal, selected }) {
  //   console.log(selected);
  return (
    <Modal className="modal-box" show={modal} onHide={onCloseClick}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-box__title">{selected.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-box__body">
        {selected.address}
        <br />
        <Link to={selected.media} className="modal-box__link">
          {" "}
          {selected.media}{" "}
        </Link>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-box__button"
          variant="secondary"
          onClick={onCloseClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
