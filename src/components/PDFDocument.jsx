import React, { useRef } from 'react';
import { PDFDownloadLink, Page, StyleSheet, Text, View, Document } from '@react-pdf/renderer';
import Button from '@mui/joy/Button';

// Componente para el PDF
const PDFDocument = React.forwardRef(({ data }, ref) => (
  <Document>
    <Page size="A4">
      <View style={styles.page}>
        <Text>Project ID: {data.id}</Text>
        <Text>Name: {data.nameProject}</Text>
        <Text>client: {data.client}</Text>
        <Text>description: {data.description}</Text>
        <Text>Date Start: {data.dateStart}</Text>
        <Text>Date End: {data.dateEnd}</Text>
      </View>
    </Page>
  </Document>
));

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
});

// Componente de botón para exportar PDF
const ExportPDFButton = ({ data }) => {
  // Ref para el componente PDFDownloadLink
  const pdfRef = useRef();

  return (
    <div>
      <PDFDownloadLink
        document={<PDFDocument data={data} ref={pdfRef} />}
        fileName={`report-${data.id}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <Button
            size="s"
            variant="outlined"
            color="primary"
          >
            {loading ? 'Cargando documento...' : 'PDF'}
          </Button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default ExportPDFButton;