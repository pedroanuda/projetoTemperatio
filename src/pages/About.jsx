import React from 'react';
import TemplatePage from './TemplatePage';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { appVersion } from '../../app.json';

const styles = StyleSheet.create({
  appInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 15
  },
  infoSection: {
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  infoText: {
    padding: 15,
    gap: 5
  }
});

export default function About() {
  return (
    <TemplatePage>
      <View style={styles.appInfo}>
        <Image source={require("../img/Batman.jpg")} style={styles.logo}/>
        <View style={styles.infoSection}>
          <Text variant="headlineSmall">Projeto Temperatio</Text>
          <Text>Versão: {appVersion}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text>Criado por Pedro H. Anuda e Matheus Carreira.</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.infoText}>
        <Text>
          O Projeto Temperatio foi criado pensando em facilitar o cálculo e a
          visualização de dados para rapel através da trigonometria.
        </Text>
        <Text>
          A pedido do professor de Química (Welisson Ferreira), o professor de Web (Henrique Viana)
          nos encarregou de fazer essa aplicação
        </Text>
      </View>
    </TemplatePage>
  )
}
