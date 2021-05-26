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


function Recursos() {
    const [user, setUser] = useState(undefined);
    const [guia, setGuia] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const  router = useRouter();


    useEffect(() => {
        (async () => {
            const { recursos} = router.query;
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
            <UserSidebar />

            <div className="dashboard__content">
            
            <Menu className="container-46 padding-bottom-30 padding-top-46">
                    <h3 className="title">GUÍA 001: {guia? guia[0].nombre : 'Hansini'}</h3>
                    {/* <Button primary>Primary</Button> */}
            </Menu>

            <div className="container-46 padding-top-46">
                <h3 className="m-0 padding-bottom-46">Recursos:</h3>

                <Menu className="six item">
                            <Menu.Item 
                                className={classNames({
                                    active: tabs === 1,
                                })+" resources__item"}
                                onClick={changeTabs1}
                            >
                                <Icon name="book" size='large'/>
                                <h4 className="resources__item__name">Libros</h4>
                            </Menu.Item>

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 2,
                                })+" resources__item"}
                                onClick={changeTabs2}
                            >
                                <Icon name="graduation" size='large'/>
                                <h4 className="resources__item__name">Tesis</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 3,
                                })+" resources__item"}
                                onClick={changeTabs3}
                            >
                                <Icon name="file outline" size='large'/>
                                <h4 className="resources__item__name">Revistas</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 4,
                                })+" resources__item"}
                                onClick={changeTabs4}
                            >
                                <h4 className="resources__item__name">Enciclopedias y diccionarios</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 5,
                                })+" resources__item"}
                                onClick={changeTabs5}
                            >
                                
                                <Icon name="database" size='large'/>
                                <h4 className="resources__item__name">Bases de Datos</h4>
                            </Menu.Item >

                            <Menu.Item  
                                className={classNames({
                                    active: tabs === 6,
                                })+" resources__item"}
                                onClick={changeTabs6}
                            >
                                
                                <Icon name="window restore outline" size='large'/>
                                <h4 className="resources__item__name">Otros sitios web</h4>
                            </Menu.Item >
                            
                        </Menu>

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
            </div>
        </div>

        </div>
            
        

       
    )
}

export default Recursos
