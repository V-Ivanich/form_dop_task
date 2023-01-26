import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ModalWindow = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <h3>Данные обновлены</h3>
      </Modal.Body>

      <Modal.Footer>
        <Link
          to='/'
          className='btn btn-outline-danger px-4'
          onClick={handleClose}
          style={{
            fontSize: '1.5rem',
            color: '#1f1f1f',
            textDecoration: 'none',
          }}>
          Close
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

ModalWindow.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
}
export default ModalWindow
