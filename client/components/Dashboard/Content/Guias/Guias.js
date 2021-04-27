import React, { useState, useEffect } from 'react'
import { Label, Menu, Table } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/router";
import useAuth from "../../../../hooks/useAuth";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";
import { getMeApi } from "../../../../api/user";

function Guias() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();
    
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
                    <Table.Row>
                        {/* <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell> */}
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        {/* <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell> */}
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        {/* <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell> */}
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        {/* <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell> */}
                        <Table.Cell>0017</Table.Cell>
                        <Table.Cell>02/02/20</Table.Cell>
                        <Table.Cell>Publicada</Table.Cell>
                        <Table.Cell>Comunicación social</Table.Cell>
                        <Table.Cell>Juan Vallovar</Table.Cell>
                        <Table.Cell> <Icon name="edit outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="trash alternate outline" size='large'></Icon></Table.Cell>
                        <Table.Cell> <Icon name="share square" size='large'></Icon></Table.Cell>
                    </Table.Row>

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                        <Menu floated='right' pagination className="shadow-none">
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