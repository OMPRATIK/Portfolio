import Modal from "../components/Modal";

import PropTypes from "prop-types";

function CertificateModal({ image, openModal, setOpenModal }) {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <img src={image} alt={`${image} modal`} />
    </Modal>
  );
}

CertificateModal.propTypes = {
  image: PropTypes.string,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};

export default CertificateModal;
