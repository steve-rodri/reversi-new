import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Modal from "../../Modal";

export const ModalButton = ({ children, modalContent, modalHeader }) => {
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <>
      <Button variant="link" onClick={onOpen}>
        {children}
      </Button>
      <Modal header={modalHeader} {...modalProps}>
        {modalContent}
      </Modal>
    </>
  );
};

ModalButton.propTypes = {
  children: PropTypes.string.isRequired,
  modalContent: PropTypes.element,
  modalHeader: PropTypes.string,
};

export default ModalButton;
