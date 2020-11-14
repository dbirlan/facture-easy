import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Description from './Description';

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    padding: '10px',
  },
  container2: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    padding: '10px',
  },
  detailColumn1: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  detailColumn2: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
    marginTop: '30px',
  },
  sender: {
    fontSize: 12,
    justifySelf: 'flex-end',
  },
  detail: {
    fontSize: 12,
  },
});

export default ({
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
}) => (
  <View>
    <View style={styles.container1}>
      <View style={styles.detailColumn1}>
        <Text style={styles.sender}>
          {prenom1} {nom1}
        </Text>
        <Text style={styles.sender}>{societe1}</Text>
        <Text style={styles.sender}>{adresse1}</Text>
        <Text style={styles.sender}>{cpville1}</Text>
        <Text style={styles.sender}>{telephone1}</Text>
        <Text style={styles.sender}>{email1}</Text>
        <Text style={styles.title}>Destinataire</Text>
      </View>
      <View style={styles.detailColumn2}>
        <Text style={styles.detail}>Description du service</Text>
        <Text style={styles.detail}>Conditions de payement</Text>
      </View>
    </View>
    <View style={styles.container2}>
      <Text style={styles.sender}>
        {prenom2} {nom2}
      </Text>
      <Text style={styles.sender}>{societe2}</Text>
      <Text style={styles.sender}>{adresse2}</Text>
      <Text style={styles.sender}>{cpville2}</Text>
      <Text style={styles.sender}>{telephone2}</Text>
      <Text style={styles.sender}>{email2}</Text>
    </View>
    <Description />
  </View>
);
