import {Modal, Icon, Header} from 'semantic-ui-react'

export default function CreateColectionModal(props){
    
    const {show, setShow} = props;

    const onClose = () => setShow(false);

    return(
            <Modal 
                className="create-colection-modal"
                closeIcon
                open={show}
                // trigger={<Button>Show Modal</Button>}
                onClose={onClose}
                // onOpen={() => setOpen(true)}
                >
                {/* <Header /> */}
                <Modal.Content>
                    <div className="modal__content__element">
                        <div className="modal__content__element__box">
                            <div className="modal__content__element__box__newcolection">
                                <h3 className="m-0">Nueva colección</h3>
                                <div className="modal__content__element__box__newcolection__box">
                                    <div className="modal__content__element__box__newcolection__box__input">
                                        <h4 className="m-0">Nombre de la colección: </h4>
                                        <input type='text' id='nombre' name="nombre" placeholder="Fondo Editorial"/>
                                    </div>
                                    <div className="modal__content__element__box__button" onClick={onClose}>
                                        Crear
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
    )
}