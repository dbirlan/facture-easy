import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    margin: 20,
    height: 60,
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    marginTop: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.subtitle}>Total</Text>
    </View>
  </View>
);
