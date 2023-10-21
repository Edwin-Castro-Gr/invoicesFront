import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import DeleteRowButton from '../components/DeleteClientButton';
import EditRowForm from '../components/EditRowForm'; // Importa el nuevo formulario de edición

function TableSheet() {
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // Nuevo estado para rastrear la fila en edición

    // Define la función handleRowDelete que elimina una fila del estado data
    const handleRowDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    // Define la función handleRowEdit que inicia la edición de una fila
    const handleRowEdit = (index) => {
        setEditingIndex(index);
    };

    // Define la función handleRowSave que guarda los datos editados
    const handleRowSave = (index, updatedData) => {
        const newData = [...data];
        newData[index] = updatedData;
        setData(newData);
        setEditingIndex(null); // Finaliza la edición
    };

    useEffect(() => {
        // Simula la carga de datos desde un archivo JSON
        const fetchData = async () => {
            try {
                const response = await import('../dataTest/projects.json');
                setData(response.default);
            } catch (error) {
                console.error('Error al cargar datos JSON:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="App-header">
                <main style={{ marginTop: "-180px ", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
                        <Table
                            stripe="odd"
                            hoverRow
                            sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
                        >
                            <caption style={{ textAlign: 'center' }}>
                                <h1>Projects</h1>
                            </caption>
                            <thead>
                                <tr>
                                    <th style={{ width: '5%' }}>Edit</th>
                                    <th style={{ width: '5%' }}>Delete</th>
                                    <th style={{ width: '6%' }}>ID Project</th>
                                    <th style={{ width: '7%' }}>Name Project</th>
                                    <th style={{ width: '7%' }}>Client</th>
                                    <th style={{ width: '22%' }}>Description Project</th>
                                    <th style={{ width: '8%' }}>Date Start&nbsp;</th>
                                    <th style={{ width: '8%' }}>Date End Preview&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingIndex === index ? (
                                                <EditRowForm
                                                    initialData={row}
                                                    onSave={(updatedData) => handleRowSave(index, updatedData)}
                                                    onCancel={() => setEditingIndex(null)}
                                                />
                                            ) : (
                                                <Button onClick={() => handleRowEdit(index)}>Edit</Button>
                                            )}
                                        </td>
                                        <td>
                                            <DeleteRowButton index={index} onDelete={handleRowDelete} />
                                        </td>
                                        <td>{row.idProject}</td>
                                        <td>{row.nameProject}</td>
                                        <td>{row.client}</td>
                                        <td>{row.description}</td>
                                        <td>{row.dateStart}</td>
                                        <td>{row.dateEnd}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Sheet>
                </main>
            </div>
        </>
    );
}

export default TableSheet;
