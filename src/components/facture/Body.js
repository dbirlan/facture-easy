import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  container2: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
  },
  sender: {
    fontSize: 10,
    justifySelf: 'flex-end',
  },
  detail: {
    fontSize: 12,
  },
});

export default () => (
  <View>
    <View style={styles.container1}>
      <View style={styles.detailColumn}>
        <Text style={styles.sender}>Nom</Text>
        <Text style={styles.sender}>Nom de la société</Text>
        <Text style={styles.sender}>Adresse postale</Text>
        <Text style={styles.sender}>Téléphone, email</Text>
        <Text style={styles.title}>Destinataire</Text>
      </View>
      <Text style={styles.detail}>Description du service</Text>
    </View>
    <View style={styles.container2}>
      <Text style={styles.sender}>Nom</Text>
      <Text style={styles.sender}>Nom de la société</Text>
      <Text style={styles.sender}>Adresse postale</Text>
      <Text style={styles.sender}>Téléphone, email</Text>
    </View>
  </View>
);
