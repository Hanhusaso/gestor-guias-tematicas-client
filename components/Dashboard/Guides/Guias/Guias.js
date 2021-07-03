import React, { useState, useEffect } from 'react'
import { Label, Menu, Table, Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
import useAuth from "../../../../hooks/useAuth";
import { map, size } from "lodash";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../../../api/user";
import { getGuiasApi} from '../../../../api/guia';
import Link from 'next/link';
import DeleteModal from '../../Modal/DeleteModal';

const limitPerPage = 50;

function Guias() {
    const [user, setUser] = useState(undefined);
    const [guias, setGuias] = useState([]);
    const [idGuia, setIdGuia] = useState(undefined);
    const [totalGuias, setTotalGuias] = useState(null);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const [loading, setLoading] = useState(true);

    const [showModalGuia, setShowModalGuia] = useState(false);
    const openShowModalGuia = () => { setShowModalGuia(true)}

    const router = useRouter();   

    useEffect(() => {
        (async () => {
          const response = await getGuiasApi(limitPerPage,0);
          setGuias(response);
          setLoading(false);
        })();
    }, [loading]);

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
                        { guias.map((guia, index) =>(
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
                                    {/* <Icon onClick={ () => deleteGuia(guia._id)} name="trash alternate outline" className="pointer" size='large'> */}
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
                    
                    {/* <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='8'>
                            <Menu pagination className="shadow-none">
                                <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer> */}
                </Table>
                }
            </div>
            <DeleteModal show = {showModalGuia} setShow={setShowModalGuia} idDelete = {idGuia} setLoading={setLoading} tipo="guia"/>
        </div>
    )
}

export default Guias
