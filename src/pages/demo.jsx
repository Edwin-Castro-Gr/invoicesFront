import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal({ invoiceData, onClose }) {
    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">Detail Invoice</h2>
                {invoiceData && (
                    <>

                        <p>IdFactura: {invoiceData.IdFactura}</p>
                        <p id="child-modal-description">
                            Cliente: {invoiceData.Cliente}
                        </p>
                        <p>Nombre del Proyecto: {invoiceData.NombreProyecto}</p>
                        <p>Cliente: {invoiceData.Cliente}</p>

                        <p>Fecha de Emisión: {invoiceData.FechaEmision}</p>
                        <p>Tarifa por Hora: {invoiceData.TarifaHora}</p>
                        <p>Total de Horas: {invoiceData.TotalHoras}</p>
                        <p>Total de Factura: {invoiceData.TarifaHora * invoiceData.TotalHoras}</p>
                        <p>Estado de la Factura: {invoiceData.EstadoFactura}</p>
                    </>
                )}
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={onClose}
                >
                    Close Child Modal
                </Button>
            </Box>
        </Modal>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const [selectedInvoiceId, setSelectedInvoiceId] = React.useState(''); // Estado para el ID de la factura
    const [invoices, setInvoices] = React.useState([]);

    React.useEffect(() => {
        // Cargar los datos del archivo JSON local
        import('../dataTest/Facturas.json')
            .then((data) => {
                setInvoices(data.default);
            })
            .catch((error) => {
                console.error('Error al cargar el archivo JSON', error);
            });
    }, []);

    const handleOpen = (invoiceId) => {
        setSelectedInvoiceId(invoiceId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedInvoiceId(''); // Limpiar el estado del ID de la factura
    };

    // Filtrar facturas para eliminar duplicados basados en el ID
    const uniqueInvoices = Array.from(new Set(invoices.map(invoice => invoice.id))).map(id => {
        return invoices.find(invoice => invoice.id === id);
    });

    return (
        <div>
            {uniqueInvoices.map((invoice, index) => (
                <Button
                    key={index}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpen(invoice.id)}
                >
                    View Invoice {invoice.id}
                </Button>
            ))}
            {selectedInvoiceId !== '' && (
                <ChildModal
                    invoiceData={invoices.find(invoice => invoice.id === selectedInvoiceId)}
                    onClose={handleClose}
                />
            )}
        </div>
    );
}
