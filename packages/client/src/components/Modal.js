import React from "react";
import PropTypes from "prop-types";
import {
  Modal as ChakraModal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";

const Modal = ({ header, children, footer }) => {
  return (
    <ChakraModal>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

Modal.propTypes = {
  header: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  footer: PropTypes.any,
};

export default Modal;
