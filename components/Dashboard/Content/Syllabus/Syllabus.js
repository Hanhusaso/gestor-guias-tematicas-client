import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionSyllabus from './ColeccionSyllabus';
import EditarColeccionSyllabus from './EditarColeccionSyllabus';

export default function Syllabus() {
    const [showEditSyllabus, setShowEditSyllabus] = React.useState(false);
    const openShowEditSyllabus = () => { setShowEditSyllabus(true)}

    return (
        <div>
            {showEditSyllabus == false ? (
                <ColeccionSyllabus edit = {showEditSyllabus} setEdit = {setShowEditSyllabus} />
            ): null}
            
            {showEditSyllabus == true ? (
                <EditarColeccionSyllabus edit = {showEditSyllabus} setEdit = {setShowEditSyllabus} />
            ): null}
        </div>
    )
}