import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Label, Menu, Table, Loader, Pagination } from 'semantic-ui-react'
import useAuth from "../../../../hooks/useAuth";
import { map, size } from "lodash";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../../../api/user";
import { getGuiasApi, getTotalGuiasApi} from '../../../../api/guia';
import Link from 'next/link';
import DeleteModal from '../../Modal/DeleteModal';

const limitPerPage = 3;

function Guias() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();

    const [guias, setGuias] = useState([]);
    const [idGuia, setIdGuia] = useState(undefined);
    const [loading, setLoading] = useState(true);


    const [totalGuias, setTotalGuias] = useState(null);
    const [paginador, setPaginador] = useState("");
    const [page, setPage] = useState(0);
    const [numberPage, setNumberPage] = useState(1);
    
    const [tabs, setTabs] = useState(1);

    const [showModalGuia, setShowModalGuia] = useState(false);
    const openShowModalGuia = () => { setShowModalGuia(true)}

    const onPageChange = (event, data) => {
        let paginaActual = Math.ceil(data.activePage);
        // console.log((paginaActual-1)*limitPerPage);
        setPage((paginaActual-1)*limitPerPage);
        setNumberPage(paginaActual);
    };

    useEffect(() => {
        (async () => {
          const response = await getGuiasApi(
              limitPerPage,
              page);
          console.log(response);
          setGuias(response);
          setLoading(false);
        })();
    }, [loading, page]);

    useEffect(() => {
        (async () =>{
            const response = await getTotalGuiasApi();
            console.log(response);
            setTotalGuias(response);
            setPaginador('');
            setPaginador(<Pagination defaultActivePage={numberPage} totalPages={response/limitPerPage} onPageChange={onPageChange} />);
        })();
    }, [guias,page]);


    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    return (
        <div>
            <Menu className="container-46 padding-bottom-30 padding-top-46">
                    <h3 className="title">MIS GUÍAS TEMÁTICAS</h3>
            </Menu>

            <div className="container-46 padding-top-46">
                {loading ? <Loader active inline='centered' size='huge' /> : 
                <>
                <Table celled className="text-center">
                    
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>N°</Table.HeaderCell>
                            <Table.HeaderCell>FECHA</Table.HeaderCell>
                            <Table.HeaderCell>ESTADO</Table.HeaderCell>
                            <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                            <Table.HeaderCell>USUARIO</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    
                    <Table.Body>  
                        { size(guias) == 0 ? <h3>No Existen guias</h3> : null}                  
                        { size(guias) > 0 && guias.map((guia, index) =>(
                            <Table.Row key={index}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>{guia.fecha}</Table.Cell>
                                { guia.estado ? (
                                    <Table.Cell>Publicado</Table.Cell>
                                    ):(
                                        <Table.Cell>Guardado</Table.Cell>
                                    )
                                }
                                <Table.Cell>{guia.nombre}</Table.Cell>
                                <Table.Cell>{guia.usuario.username}</Table.Cell>
                                <Table.Cell > 
                                    <Link href={`/dashboard/guias/${guia.url}`}>
                                        <Icon name="edit outline" className="pointer" size='large'></Icon>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell> 
                                    <Icon onClick={ () => {setShowModalGuia(true), setIdGuia(guia._id)}} name="trash alternate outline" className="pointer" size='large'>
                                    </Icon>
                                </Table.Cell>
                                <Table.Cell> 
                                    <Icon  name="share square" className="pointer" size='large'></Icon>
                                </Table.Cell>
                            </Table.Row>
                            
                        ))
                        }
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='8'>
                                       {paginador}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                </>
                }
            </div>
            <DeleteModal show = {showModalGuia} setShow={setShowModalGuia} idDelete = {idGuia} setLoading={setLoading} tipo="guia"/>
        </div>
    )
}

export default Guias
