import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import DeleteRowButton from '../components/DeleteProjectButton';





// Define la función handleRowDelete que elimina una fila del estado data
const handleRowDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
};




export default function TableSheet() {
    const [data, setData] = useState([]);

    useEffect(() => {
        import('../dataTest/client.json')
            .then((jsonData) => {
                setData(jsonData.default);
            })
            .catch((error) => {
                console.error('Error al cargar datos JSON:', error);
            });
    }, []);


    return (
        <>
            {/* <Nav /> */}
            <div className="App-header">
                <main style={{ marginTop: "-180px ", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
                        <Table
                            stripe="odd"
                            hoverRow
                            sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
                        >
                            <caption style={{ textAlign: 'center' }}>
                                <h1>Customers</h1>
                            </caption>
                            <thead>
                                <tr>
                                    <th style={{ width: '4%' }}>Edit</th>
                                    <th style={{ width: '4%' }}>Delete</th>
                                    <th style={{ width: '4%' }}>ID Client</th>
                                    <th style={{ width: '7%' }}>Client</th>
                                    <th style={{ width: '10%' }}>Nit</th>
                                    <th style={{ width: '10%' }}>Direction</th>
                                    <th style={{ width: '10%' }}>Number phone&nbsp;</th>
                                    <th style={{ width: '10%' }}>Email&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Button
                                                size="s"
                                                variant="outlined"
                                                color="primary"
                                                onClick={() => EditRow(row)}
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <DeleteRowButton index={index} onDelete={handleRowDelete} />
                                        </td>
                                        <td>{row['ID Client']}</td>
                                        <td>{row.Client}</td>
                                        <td>{row.Nit}</td>
                                        <td>{row.Direction}</td>
                                        <td>{row['NumberPhone']}</td>
                                        <td>{row.Email}</td>
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
