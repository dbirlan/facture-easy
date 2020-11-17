import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    margin: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#112131',
    borderStyle: 'solid',
  },
  detailColumn: {
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: '#112131',
    borderStyle: 'solid',
    flexGrow: 9,
  },
  name: {
    fontSize: 24,
  },
  title: {
    fontSize: 14,
    justifySelf: 'flex-end',
    marginTop: 10,
    margin: 'auto',
    borderBottomWidth: 1,
    borderColor: '#112131',
    borderStyle: 'solid',
    padding: '5px',
  },
  subtitle: {
    fontSize: 12,
    justifySelf: 'flex-end',
    marginTop: 10,
    margin: 'auto',
    padding: '5px',
  },
});

export default (description) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.subtitle}>{description.description}</Text>
    </View>
    <View style={styles.detailColumn}>
      <Text style={styles.title}>Quantité</Text>
      <Text style={styles.subtitle}>{description.price}</Text>
    </View>
    <View style={styles.detailColumn}>
      <Text style={styles.title}>Prix Unitaire</Text>
      <Text style={styles.subtitle}>{description.quantity}</Text>
    </View>
    <View style={styles.detailColumn}>
      <Text style={styles.title}>Total</Text>
      <Text style={styles.subtitle}>
        {description.quantity * description.price}
      </Text>
    </View>
  </View>
);
