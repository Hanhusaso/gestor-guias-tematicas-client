import React, { useState, useEffect, useMemo } from 'react'
import { Menu } from 'semantic-ui-react'
import { useRouter } from "next/router";
import Libros from "../../../components/Dashboard/Content/Libros"
import Tesis from "../../../components/Dashboard/Content/Tesis";
import Revistas from "../../../components/Dashboard/Content/Revistas";
import Enciclopedias from "../../../components/Dashboard/Content/Enciclopedias";
import BaseDatos from "../../../components/Dashboard/Content/BaseDatos";
import useAuth from "../../../hooks/useAuth";
import classNames from "classnames";
import { Icon, Button } from "semantic-ui-react";
import { getMeApi } from "../../../api/user";
import { getGuiaXUrlApi } from '../../../api/guia';
import UserSidebar from "../../../components/Dashboard/User/Sidebar/UserSideBar";
import OtrosSitios from '../../../components/Dashboard/Content/OtrosSitios';
import ResourcesMenuSlider from '../../../components/Dashboard/ResourcesMenuSlider/ResourcesMenuSlider';
import Periodicas from '../../../components/Dashboard/Content/Periodicas/Periodicas';
import Videos from '../../../components/Dashboard/Content/Videos/Videos';
import Examenes from '../../../components/Dashboard/Content/Examenes';
import Syllabus from '../../../components/Dashboard/Content/Syllabus';

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

                <ResourcesMenuSlider tabsp={tabs} setTabsp={setTabs}/>

                        {tabs == 1 ? (
                            <Libros idGuia = { guia? guia[0]._id:""}/>
                        ): null}

                        {tabs == 2 ? (
                            <Tesis idGuia = { guia? guia[0]._id:""}/>
                        ): null}

                        {tabs == 3 ? (
                            <Revistas idGuia = { guia? guia[0]._id:""}/>
                        ): null}
                        {tabs == 4 ? (
                            <Enciclopedias idGuia = { guia? guia[0]._id:""}/>
                        ): null}
                        {tabs == 5 ? (
                            <BaseDatos idGuia = { guia? guia[0]._id:""}/>
                        ): null}
                        {tabs == 6 ? (
                            <OtrosSitios idGuia = { guia? guia[0]._id:""}/>
                        ): null}
                        {tabs == 7 ? (
                            <Periodicas />
                        ): null}
                        {tabs == 8 ? (
                            <Videos />
                        ): null}
                        {tabs == 9 ? (
                            <Examenes />
                        ): null}
                        {tabs == 10 ? (
                            <Syllabus />
                        ): null}
            </div>
        </div>

        </div>
    )
}

export default Recursos
