import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.titulo}>Detalhes da Cesta</Text>

      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <Text>Jenny Jack Farm</Text>
        <Text>
          Uma cesta com produtos selecionados cuidadosamente direto para sua
          cozinha
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
});
