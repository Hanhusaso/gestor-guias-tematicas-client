import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { List, Image, Icon } from "semantic-ui-react";

export default function Libros() {

    return (
        <div className="colections">
            <div className="colections__header">
                <h3 className="colections__header__title">COLECCIONES</h3> 
                <Icon name="add circle"/> <h3 className="colections__header__create">Crear Colección</h3>
                {/* <h3>Crear Colección</h3> */}
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
        </div>
    )
}