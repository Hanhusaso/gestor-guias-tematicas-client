import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionExamenes from './ColeccionExamenes';
import EditarColeccionExamenes from './EditarColeccionExamenes';

export default function Examenes() {
    const [showEditExamenes, setShowEditExamenes] = React.useState(false);
    const openShowEditExamenes = () => { setShowEditExamenes(true)}

    return (
        <div>
            {showEditExamenes == false ? (
                <ColeccionExamenes edit = {showEditExamenes} setEdit = {setShowEditExamenes} />
            ): null}
            
            {showEditExamenes == true ? (
                <EditarColeccionExamenes edit = {showEditExamenes} setEdit = {setShowEditExamenes} />
            ): null}
        </div>
    )
}