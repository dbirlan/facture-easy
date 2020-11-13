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
    marginTop: '10px',
  },
  sender: {
    fontSize: 10,
    justifySelf: 'flex-end',
  },
  detail: {
    fontSize: 10,
  },
});

export default () => (
  <View>
    <View style={styles.container1}>
      <View style={styles.detailColumn1}>
        <Text style={styles.sender}>Nom</Text>
        <Text style={styles.sender}>Nom de la société</Text>
        <Text style={styles.sender}>Adresse postale</Text>
        <Text style={styles.sender}>Téléphone, email</Text>
        <Text style={styles.title}>Destinataire</Text>
      </View>
      <View style={styles.detailColumn2}>
        <Text style={styles.detail}>Description du service</Text>
        <Text style={styles.detail}>Conditions de payement</Text>
      </View>
    </View>
    <View style={styles.container2}>
      <Text style={styles.sender}>Nom</Text>
      <Text style={styles.sender}>Nom de la société</Text>
      <Text style={styles.sender}>Adresse postale</Text>
      <Text style={styles.sender}>Téléphone, email</Text>
    </View>
    <Description />
  </View>
);
