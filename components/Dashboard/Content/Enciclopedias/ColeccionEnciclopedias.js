import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon } from "semantic-ui-react";
import CreateColectionModal from '../../Modal/CreateColectionModal';
// import DeleteColectionModal from '../../Modal/DeleteColectionModal';

export default function ColeccionEnciclopedias(props) {

    const {edit, setEdit} = props;
    const openEdit = () => setEdit(true);

    const [showModalEnciclopedias, setShowModalEnciclopedias] = React.useState(false);
    const openShowModalEnciclopedias = () => { setShowModalEnciclopedias(true)}

    const [showModalEnciclopedias2, setShowModalEnciclopedias2] = React.useState(false);
    const openShowModalEnciclopedias2 = () => { setShowModalEnciclopedias2(true)}
    
    return (
        <div className="colections">
            <div className="colections__header padding-top-46">
                <h3 className="colections__header__title">COLECCIONES</h3>
                <div className="colections__header__button" onClick={openShowModalEnciclopedias}><Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3></div>
                {/* <Button
                    content=''
                    disabled={open}
                    // positive
                    onClick={prueba}
                /> */}
                
            </div>

            <div className="colections__content container-30 padding-top-46">
                <div className="colections__content__element padding-bottom-25">
                    <div className="colections__content__element__box container-46">
                        <h3 className="m-0">Colección impresa</h3>
                        <div className="colections__content__element__box__button" onClick={openEdit}>
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large' onClick={openShowModalEnciclopedias2}/>
                </div>

                <div className="colections__content__element padding-bottom-25">
                    <div className="colections__content__element__box container-46">
                        <h3 className="m-0">Fondo Editorial</h3>
                        <div className="colections__content__element__box__button" onClick={openEdit}>
                            Editar
                        </div>
                    </div>
                    <Icon name="trash alternate outline" size='large' onClick={openShowModalEnciclopedias2}/>
                </div>
            </div>

            <CreateColectionModal show = {showModalEnciclopedias} setShow={setShowModalEnciclopedias} />

            {/* <DeleteColectionModal show2 = {showModalEnciclopedias2} setShow2={setShowModalEnciclopedias2} /> */}

        </div>
    )
}