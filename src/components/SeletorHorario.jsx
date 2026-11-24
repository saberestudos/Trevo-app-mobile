// Caixa de seleção de horário (dropdown). Ao tocar, abre a lista de horários.
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { HORARIOS } from '../utils/horarios';
import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function SeletorHorario({ valor, aoSelecionar, descricao }) {
  const [listaAberta, setListaAberta] = useState(false);

  function selecionar(horario) {
    aoSelecionar(horario);
    setListaAberta(false);
  }

  return (
    <>
      <Pressable
        style={estilos.caixa}
        onPress={() => setListaAberta(true)}
        accessibilityLabel={descricao}
      >
        <Text style={estilos.valor}>{valor || '-'}</Text>
        <Feather name="chevron-down" size={24} color={cores.texto} />
      </Pressable>

      <Modal
        visible={listaAberta}
        transparent
        animationType="fade"
        onRequestClose={() => setListaAberta(false)}
      >
        <Pressable style={estilos.fundo} onPress={() => setListaAberta(false)}>
          <View style={estilos.lista}>
            <FlatList
              data={HORARIOS}
              keyExtractor={(horario) => horario}
              renderItem={({ item }) => (
                <Pressable
                  style={estilos.opcao}
                  onPress={() => selecionar(item)}
                >
                  <Text style={estilos.textoOpcao}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const estilos = StyleSheet.create({
  caixa: {
    flex: 1,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 9,
    paddingRight: 4,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: cores.primaria,
    backgroundColor: cores.fundoTranslucido,
  },
  valor: {
    ...fonte(familias.media, 20),
    color: cores.texto,
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: cores.sobreposicao,
  },
  lista: {
    maxHeight: 360,
    borderRadius: 6,
    backgroundColor: cores.fundo,
  },
  opcao: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textoOpcao: {
    ...fonte(familias.media, 20),
    color: cores.texto,
  },
});
