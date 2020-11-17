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

function MyDocument({
  date,
  nom1,
  prenom1,
  societe1,
  adresse1,
  cpville1,
  telephone1,
  email1,
  nom2,
  prenom2,
  societe2,
  adresse2,
  cpville2,
  telephone2,
  email2,
  description,
  quantity,
  price,
}) {
  return (
    <PDFViewer width="50%" height="800px">
      <Document>
        <Page size="A4" style={styles.page}>
          <Header date={date} />
          <Body
            nom1={nom1}
            prenom1={prenom1}
            societe1={societe1}
            adresse1={adresse1}
            cpville1={cpville1}
            telephone1={telephone1}
            email1={email1}
            nom2={nom2}
            prenom2={prenom2}
            societe2={societe2}
            adresse2={adresse2}
            cpville2={cpville2}
            telephone2={telephone2}
            email2={email2}
            description={description}
            quantity={quantity}
            price={price}
          />
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
