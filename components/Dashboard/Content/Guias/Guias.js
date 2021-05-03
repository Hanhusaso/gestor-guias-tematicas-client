import React, { useState, useEffect } from 'react'
import { Label, Menu, Table } from 'semantic-ui-react'
import { useRouter } from "next/router";
import useAuth from "../../../../hooks/useAuth";
import { map, size } from "lodash";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../../../api/user";
import { getGuiasApi } from '../../../../api/guia';
import Link from 'next/link';

function Guias() {
    const [user, setUser] = useState(undefined);
    const [guias, setGuias] = useState([]);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();
    

    useEffect(() => {
        (async () => {
          const response = await getGuiasApi();
          console.log(response);
          setGuias(response);
        })();
    }, []);

    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    return (
        <div>
            <Menu>
                    <h3 className="title">MIS GUÍAS TEMÁTICAS</h3>
            </Menu>

            <div className="dashboard__content__padding">
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
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{guia.fecha}</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>{guia.nombre}</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            {/* { {guia,estado} ? (
                                <Table.Cell>Publicado</Table.Cell>
                                ):(
                                    <Table.Cell>Guardado</Table.Cell>
                                )
                            } */}
                            {/* <Table.Cell>{guia.estado}</Table.Cell> */}
                            {/* <Table.Cell>${guia.usuario.username}</Table.Cell> */}
                            {/* <Table.Cell>{guia.usuario.username}</Table.Cell> */}
                            <Table.Cell > 
                                <Link href="/dashboard/guias/recursos">
                                    <Icon name="edit outline" className="pointer" size='large'></Icon>
                                </Link>
                            </Table.Cell>
                            <Table.Cell> <Icon name="trash alternate outline" className="pointer" size='large'></Icon></Table.Cell>
                            <Table.Cell> 
                                <Icon name="share square" className="pointer" size='large'></Icon></Table.Cell>
                        </Table.Row>
                    ))

                    }

                    {/* <Table.Row>
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large' className="pointer"></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large' className="pointer"></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large' className="pointer"></Icon></Table.Cell>
                    </Table.Row>

                    {/* <Table.Row>
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row> */}

                    {/* <Table.Row>
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row> */}

                </Table.Body>

                <Table.Footer>
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
                </Table.Footer>
            </Table>
            </div>
        </div>
    )
}

export default Guias
