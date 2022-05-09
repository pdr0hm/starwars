import Modal from "react-modal";
import { useState } from "react";

export function CharacterModal(character) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return <Modal isOpen={modalIsOpen} onRequestClose={closeModal}></Modal>;
}
