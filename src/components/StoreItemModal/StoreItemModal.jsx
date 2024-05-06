import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function StoreItemModal({ onCloseClick, modal, selected }) {
  //   console.log(selected);
  return (
    <Modal show={modal} onHide={onCloseClick}>
      <Modal.Header closeButton>
        <Modal.Title>{selected.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
