import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionPeriodicas from './ColeccionPeriodicas';
import EditarColeccionPeriodicas from './EditarColeccionPeriodicas';

export default function Periodicas() {
    const [showEditPeriodicas, setShowEditPeriodicas] = React.useState(false);
    const openShowEditPeriodicas = () => { setShowEditPeriodicas(true)}

    return (
        <div>
            {showEditPeriodicas == false ? (
                <ColeccionPeriodicas edit = {showEditPeriodicas} setEdit = {setShowEditPeriodicas} />
            ): null}
            
            {showEditPeriodicas == true ? (
                <EditarColeccionPeriodicas edit = {showEditPeriodicas} setEdit = {setShowEditPeriodicas} />
            ): null}
        </div>
    )
}