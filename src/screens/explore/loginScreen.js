import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Realm, useApp} from '@realm/react';
import {scaleWidth} from '../../transforms/scale';
import Images from '../../themes/Images';

export let AuthState;

(function (AuthState) {
  AuthState[(AuthState.None = 0)] = 'None';
  AuthState[(AuthState.Loading = 1)] = 'Loading';
  AuthState[(AuthState.LoginError = 2)] = 'LoginError';
  AuthState[(AuthState.RegisterError = 3)] = 'RegisterError';
})(AuthState || (AuthState = {}));

export const LoginScreen = () => {
  const app = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authState, setAuthState] = useState(AuthState.None);

  // If the user presses "login" from the auth screen, try to log them in
  // with the supplied credentials
  const handleLogin = useCallback(async () => {
    setAuthState(AuthState.Loading);
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      await app.logIn(credentials);
      setAuthState(AuthState.None);
    } catch (e) {
      console.log('Error logging in', e);
      setAuthState(AuthState.LoginError);
    }
  }, [email, password, setAuthState, app]);

  // If the user presses "register" from the auth screen, try to register a
  // new account with the  supplied credentials and login as the newly created user
  const handleRegister = useCallback(async () => {
    setAuthState(AuthState.Loading);

    try {
      // Register the user...
      await app.emailPasswordAuth.registerUser({email, password});
      // ...then login with the newly created user
      const credentials = Realm.Credentials.emailPassword(email, password);
      await app.logIn(credentials);
      setAuthState(AuthState.None);
    } catch (e) {
      console.log('Error registering', e);
      setAuthState(AuthState.RegisterError);
    }
  }, [email, password, setAuthState, app]);

  console.log({authState});
  return (
    <View style={styles.content}>
      <View style={{marginBottom: scaleWidth(40)}}>
        <Image source={Images.instagramLogo} style={styles.logoStyle} />
        <Text style={styles.cloneText}>(Clone)</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          placeholder="Password"
        />
      </View>

      {authState === AuthState.LoginError && (
        <Text style={[styles.error]}>
          There was an error logging in, please try again
        </Text>
      )}
      {authState === AuthState.RegisterError && (
        <Text style={[styles.error]}>
          There was an error registering, please try again
        </Text>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={handleLogin}
          style={[
            styles.button,
            authState === AuthState.Loading && styles.buttonDisabled,
            styles.loginButton,
          ]}
          disabled={authState === AuthState.Loading}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRegister}
          style={[
            styles.button,
            authState === AuthState.Loading && styles.buttonDisabled,
          ]}
          disabled={authState === AuthState.Loading}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.darkBlue,
  },
  inputContainer: {
    padding: 10,
    marginHorizontal: 10,
  },
  error: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    // color: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: scaleWidth(10),
    width: scaleWidth(300),
    height: scaleWidth(40),
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttons: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: scaleWidth(40),
    width: scaleWidth(145),
    borderRadius: scaleWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    margin: scaleWidth(5)
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  loginButton: {
    backgroundColor: '#F94892',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
  },
  registerText: {
    color: '#F94892',
  },
  logoStyle: {
    width: scaleWidth(180),
    height: scaleWidth(60),
    resizeMode: 'contain',
  },
  cloneText: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    fontStyle: 'italic',
    fontSize: 16,
    color: '#F94892',
  },
});
