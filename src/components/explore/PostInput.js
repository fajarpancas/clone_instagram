import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

const PostInput = ({addPost}) => {
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState('');
  const username = 'fajarpancas';
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.white}
        onChangeText={setCaption}
        placeholder="Add caption here..."
        defaultValue={caption}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.white}
        onChangeText={setPhoto}
        placeholder="Add photo link here..."
        defaultValue={photo}
      />
      <View style={styles.button}>
        <Button
          color={Colors.white}
          title="Submit"
          onPress={() => {
            if (caption == '' || photo === '') {
              alert('Caption and photo link are required');
            } else {
              addPost({username, caption, photo});
              setCaption('');
              setPhoto('');
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.vividBlue,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleWidth(10),
    paddingBottom: scaleWidth(10),
    marginBottom: scaleWidth(20),
  },
  label: {
    marginTop: scaleWidth(20),
    color: Colors.white,
  },
  button: {
    marginTop: scaleWidth(10),
  },
  textInput: {
    borderColor: Colors.white,
    borderWidth: 1,
    color: Colors.white,
    borderRadius: scaleWidth(20),
    padding: scaleWidth(10),
    marginTop: scaleWidth(10),
  },
});

export default PostInput;
