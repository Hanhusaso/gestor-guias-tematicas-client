import {Modal, Icon, Header, Button} from 'semantic-ui-react'

export default function DeleteColectionModal(props){
    
    const {show2, setShow2} = props;

    const onClose2 = () => setShow2(false);

    return(
            <Modal 
                className="delete-colection-modal"
                // closeIcon
                open={show2}
                size="small"
                // trigger={<Button>Show Modal</Button>}
                // onClose={onClose2}
                // onOpen={() => setOpen(true)}
                >
                {/* <Header /> */}
                <Modal.Content>
                    <div className="delete-colection-modal__content padding-top-46 padding-bottom-46">
                        <h2 className="m-0">¿Estás seguro de eliminar toda la colección?</h2>
                            
                        <div className="delete-colection-modal__content__buttons padding-top-46">
                            <Button>Sí, eliminar colección</Button>
                            <Button onClick={onClose2}>Cancelar</Button>
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
    )
}