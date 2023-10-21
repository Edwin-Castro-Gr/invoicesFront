import React from 'react';
import Modal from 'react-modal';

// Componente para el modal de previsualización
const PreviewModal = ({ isOpen, onClose, data }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Preview Modal"
        >
            <div>
                <h2>Preview</h2>
                <p>Project ID: {data.id}</p>
                <p>Name: {data.nameProject}</p>
                <p>Client: {data.client}</p>
                <p>Description: {data.description}</p>
                <p>Date Start: {data.dateStart}</p>
                <p>Date End: {data.dateEnd}</p>
            </div>
        </Modal>
    );
};

export default PreviewModal;
