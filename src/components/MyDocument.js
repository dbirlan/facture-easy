import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function MyDocument({ nom, prenom }) {
  console.log({ nom, prenom });
  return (
    <PDFViewer width="50%" height="800px">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Nom : {nom}</Text>
            <Text>Nom : {nom}</Text>
            <Text>Nom : {nom}</Text>
          </View>
          <View style={styles.section}>
            <Text>Prénom : {prenom}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
