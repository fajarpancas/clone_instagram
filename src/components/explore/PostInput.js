import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/Colors';
import {scaleWidth} from '../../transforms/scale';

const PostInput = ({addPost, onLogout, user}) => {
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState('');
  const username = 'fajarpancas';
  return (
    <View style={styles.wrapper}>
      <View style={styles.userWrapper}>
        <Text style={styles.logoutText}>{user}</Text>
        <TouchableOpacity style={styles.logout} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
  logout: {
    backgroundColor: 'red',
    width: scaleWidth(100),
    height: scaleWidth(40),
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  logoutText: {
    color: Colors.white,
  },
  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PostInput;
