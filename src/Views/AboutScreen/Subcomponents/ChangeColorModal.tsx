import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {GenericButton} from '../../../Components/GenericButton';
import {GenericSlider} from '../../../Components/GenericSlider';
import {
  changeBlueTone,
  changeGreenTone,
  changeRedTone,
  randomizeColorPalette,
} from '../../../StateManagement/ColorContext/Actions';
import {useColorContext} from '../../../StateManagement/ColorContext/ColorContext';
import {ColorValueBox} from './ColorValueBox';
export interface ChangeColorModalProps {
  open: boolean;
  onClose: () => void;
}

export const ChangeColorModal = (props: ChangeColorModalProps) => {
  const {open, onClose} = props;

  const {state, dispatch} = useColorContext();

  return (
    <Modal
      visible={open}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.captionView}>
          <Text>Red</Text>
          <ColorValueBox color="red" />
        </View>

        <GenericSlider
          value={state.base.red}
          onValueChange={value => dispatch(changeRedTone(value[0].toFixed()))}
          maximumValue={255}
        />
        <View style={styles.captionView}>
          <Text>Green</Text>
          <ColorValueBox color="green" />
        </View>
        <GenericSlider
          value={state.base.green}
          onValueChange={value => dispatch(changeGreenTone(value[0].toFixed()))}
          maximumValue={255}
        />
        <View style={styles.captionView}>
          <Text>Blue</Text>
          <ColorValueBox color="blue" />
        </View>
        <GenericSlider
          value={state.base.blue}
          onValueChange={value => dispatch(changeBlueTone(value[0].toFixed()))}
          maximumValue={255}
        />
        <GenericButton
          title="Randomize"
          onPress={() => dispatch(randomizeColorPalette())}
        />
        <GenericButton title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  captionView: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
