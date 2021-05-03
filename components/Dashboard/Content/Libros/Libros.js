import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";

export default function Libros() {
    const [open, setOpen] = React.useState(false)

    const prueba = () => {
        setOpen(true)
    }

    return (
        <div className="colections">
            <div className="colections__header">
                <h3 className="colections__header__title">COLECCIONES</h3>
                <div className="colections__header__button" onClick={prueba} disabled={open}><Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3></div>
                {/* <Button
                    content=''
                    disabled={open}
                    // positive
                    onClick={prueba}
                /> */}
                
            </div>

            <div className="colections__content">
                <div className="colections__content__element">
                    <div className="colections__content__element__box">
                        <h3 className="m-0">Colección impresa</h3>
                        <div className="colections__content__element__box__button">
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large'/>
                </div>

                <div className="colections__content__element">
                    <div className="colections__content__element__box">
                        <h3 className="m-0">Fondo Editorial</h3>
                        <div className="colections__content__element__box__button">
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large'/>
                </div>
            </div>

            

            <Modal 
                className="modal-colection"
                closeIcon
                open={open}
                // trigger={<Button>Show Modal</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header />
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
                                    <div className="modal__content__element__box__button">
                                        Crear
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </Modal.Content>
                {/* <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                    </Button>
                    <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions> */}
            </Modal>
        </div>
    )
}