import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon, Modal, Button, Header } from "semantic-ui-react";
import CreateColectionModal from '../../Modal/CreateColectionModal';
import DeleteColectionModal from '../../Modal/DeleteColectionModal';

export default function ColeccionLibros(props) {

    const {edit, setEdit} = props;
    const openEdit = () => setEdit(true);

    const [showModal, setShowModalLibro] = React.useState(false);
    const openShowModalLibro = () => { setShowModalLibro(true)}

    const [showModal2, setShowModalLibro2] = React.useState(false);
    const openShowModalLibro2 = () => { setShowModalLibro2(true)}
    
    return (
        <div className="colections padding-top-46">
            <div className="colections__header">
                <h3 className="colections__header__title">COLECCIONES</h3>
                <div className="colections__header__button" onClick={openShowModalLibro}><Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3></div>     
            </div>

            <div className="colections__content container-30 padding-top-46">
                <div className="colections__content__element padding-bottom-25">
                    <div className="colections__content__element__box container-46">
                        <h3 className="m-0">Colección impresa</h3>
                        <div className="colections__content__element__box__button" onClick={openEdit}>
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large' onClick={openShowModalLibro2}/>
                </div>

                <div className="colections__content__element padding-bottom-25">
                    <div className="colections__content__element__box container-46">
                        <h3 className="m-0">Fondo Editorial</h3>
                        <div className="colections__content__element__box__button" onClick={openEdit}>
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large' onClick={openShowModalLibro2}/>
                </div>
            </div>

            <CreateColectionModal show = {showModal} setShow={setShowModalLibro} />

            <DeleteColectionModal show2 = {showModal2} setShow2={setShowModalLibro2}  />
        </div>
    )
}