import React from 'react';
import { Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

import Header from './facture/Header';
import Body from './facture/Body';
import Footer from './facture/Footer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    margin: 10,
    textAlign: 'center',
  },
});

function MyDocument({ nom, prenom }) {
  return (
    <PDFViewer width="50%" height="800px">
      <Document>
        <Page size="A4" style={styles.page}>
          <Header />
          <Body />
          <Footer />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;

/* 
<View style={styles.title}>
            <Text>Facture n°{Math.floor(Math.random() * 1000000)}</Text>
          </View>
          <View style={styles.section}>
            <Text>Nom : {nom}</Text>
          </View>
          <View style={styles.section}>
            <Text>Prénom : {prenom}</Text>
          </View>
*/
