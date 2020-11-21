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
  },
  detailColumn2: {
    marginLeft: '40px',
    width: '340px',
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
    marginBottom: '5px',
  },
});

export default (props) => (
  <View>
    <View style={styles.container1}>
      <View style={styles.detailColumn1}>
        <Text style={styles.sender}>
          {props.prenom1} {props.nom1} {console.log(props)}
        </Text>
        <Text style={styles.sender}>{props.societe1}</Text>
        <Text style={styles.sender}>{props.adresse1}</Text>
        <Text style={styles.sender}>{props.cpville1}</Text>
        <Text style={styles.sender}>{props.telephone1}</Text>
        <Text style={styles.sender}>{props.email1}</Text>
        <Text style={styles.title}>Destinataire</Text>
      </View>
      <View style={styles.detailColumn2}>
        <Text style={styles.detail}>{props.serviceDescription}</Text>
        <Text style={styles.detail}>{props.conditions}</Text>
      </View>
    </View>
    <View style={styles.container2}>
      <Text style={styles.sender}>
        {props.prenom2} {props.nom2}
      </Text>
      <Text style={styles.sender}>{props.societe2}</Text>
      <Text style={styles.sender}>{props.adresse2}</Text>
      <Text style={styles.sender}>{props.cpville2}</Text>
      <Text style={styles.sender}>{props.telephone2}</Text>
      <Text style={styles.sender}>{props.email2}</Text>
    </View>
    <Description elements={props.elements} />
  </View>
);
