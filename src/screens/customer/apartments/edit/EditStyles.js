import {StyleSheet, Dimensions} from 'react-native';
import Variables from '../../../../shared/variables/variables'

const EditStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },

      input: {
        marginVertical: 4,
      },
});

export default EditStyles