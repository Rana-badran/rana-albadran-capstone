import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StoreItemModal({ onCloseClick, modal, selected }) {
  //   console.log(selected);
  return (
    <Modal show={modal} onHide={onCloseClick}>
      <Modal.Header closeButton>
        <Modal.Title>{selected.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selected.address}
        <br />
        <Link>{selected.media}</Link>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
