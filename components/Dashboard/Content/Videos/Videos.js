import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import ColeccionVideos from './ColeccionVideos';
import EditarColeccionVideos from './EditarColeccionVideos';

export default function Videos() {
    const [showEditVideos, setShowEditVideos] = React.useState(false);
    const openShowEditVideos = () => { setShowEditVideos(true)}

    return (
        <div>
            {showEditVideos == false ? (
                <ColeccionVideos edit = {showEditVideos} setEdit = {setShowEditVideos} />
            ): null}
            
            {showEditVideos == true ? (
                <EditarColeccionVideos edit = {showEditVideos} setEdit = {setShowEditVideos} />
            ): null}
        </div>
    )
}