import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import Helper from '../../utils';

interface IModal {
  title?: string;
  children: React.ReactNode;
  borderRadius?: string;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void
}

export default function CModal({
  title = '',
  children,
  borderRadius = ".8rem",
  footer,
  isOpen, onClose
}: IModal) {
  return (
    <Modal
      onClose={onClose}
      size="md"
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg="rgba(0, 0, 0, .7)" />
      <ModalContent bg="bg.main" maxW="30rem" borderRadius={borderRadius} overflow="hidden">
        {title && <>
          <ModalHeader color="primaryColor.main">{Helper.titleCase(title)}</ModalHeader>
          <ModalCloseButton top=".9rem" />
        </>
        }
        <ModalBody p="1.5rem" minH="10rem">
          {children}
        </ModalBody>
        {footer && <ModalFooter>
          {footer}
        </ModalFooter>}
      </ModalContent>
    </Modal>
  );
}