import React, { useState, useEffect, useMemo } from 'react'
import { Menu } from 'semantic-ui-react'
import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";
import classNames from "classnames";
import { Icon, Button } from "semantic-ui-react";
import { getMeApi } from "../../../api/user";
import { getGuiaXUrlApi } from '../../../api/guia';
import UserSidebar from "../../../components/Dashboard/User/Sidebar/UserSideBar";
import Colections from '../../../components/Dashboard/Colections';
import MenuSlider from '../../../components/Dashboard/MenuSlider/MenuSlider';

function Recursos() {
    const [user, setUser] = useState(undefined);
    const [guia, setGuia] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const  ruta = useRouter();


    useEffect(() => {
        (async () => {
            const { recursos} = ruta.query;
            const response = await getGuiaXUrlApi(recursos);
            setGuia(response);
            // console.log();
        })();
    })

    
    const changeTabs1 = () => {
        setTabs(1);
    };

    const changeTabs2 = () => {
        setTabs(2);
    };

    const changeTabs3 = () => {
        setTabs(3);
    };
    const changeTabs4 = () => {
        setTabs(4);
    };
    const changeTabs5 = () => {
        setTabs(5);
    };

    const changeTabs6 = () => {
        setTabs(6);
    };

    const changeTabs7 = () => {
        setTabs(7);
    };

    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    
    // const { activeItem } = this.state
    
    // const [activeItem, setActiveItem] = useState('MIS GUIAS TEMÁTICAS');

    return (

        <div className="dashboard resources">
            <UserSidebar ruta = {ruta.query.index}/>

            <div className="dashboard__content">
            
            <Menu className="container-46 padding-bottom-30 padding-top-46">
                    <h3 className="title">GUÍA 001: {guia? guia[0].nombre : 'Hansini'}</h3>
                    {/* <Button primary>Primary</Button> */}
            </Menu>

            <div className="container-46 padding-top-46">
                <h3 className="m-0 padding-bottom-46">Recursos:</h3>

                <MenuSlider tabsp={tabs} setTabsp={setTabs}/>

                        {tabs == 1 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Libros"/>
                        ): null}

                        {tabs == 2 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Tesis"/>
                        ): null}

                        {tabs == 3 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Revistas"/>
                        ): null}
                        {tabs == 4 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Enciclopedias"/>
                        ): null}
                        {tabs == 5 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="BaseDatos"/>
                        ): null}
                        {tabs == 6 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="OtrosSitios"/>
                        ): null}
                        {tabs == 7 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Periodicas"/>
                        ): null}
                        {tabs == 8 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Videos"/>
                        ): null}
                        {tabs == 9 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Examenes"/>
                        ): null}
                        {tabs == 10 ? (
                            <Colections idGuia = { guia? guia[0]._id:""} tipoRecurso="Syllabus"/>
                        ): null}
            </div>
        </div>

        </div>
    )
}

export default Recursos
