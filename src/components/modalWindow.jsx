import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import PropsTypes from 'prop-types'

const ModalWindow = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <h3>Данные обновлены</h3>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalWindow.propsTypes = {
  handleClose: PropsTypes.func,
  show: PropsTypes.bool,
  dataUser: PropsTypes.object,
}
export default ModalWindow
