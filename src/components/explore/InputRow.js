import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

const InputRow = ({data, onSubmit}) => {
  const [caption, setCaption] = useState(data?.caption);

  const onPress = () => {
    onSubmit({caption});
  };

  return (
    <View>
      <Text style={styles.label}>Update Caption</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setCaption}
        placeholder="Update Caption"
        defaultValue={caption}
      />

      <Button color={Colors.blue} title="Update" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: scaleWidth(20),
  },
  textInput: {
    borderColor: Colors.grey300,
    borderWidth: 1,
    borderRadius: scaleWidth(20),
    padding: scaleWidth(10),
    marginTop: scaleWidth(10),
  },
});

export default InputRow;
