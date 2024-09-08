/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';

export default function Login({navigation}) {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // function
  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert('Please fill all fields');
        setLoading(false);
        return;
      }
      console.log('Got Login Data: ', {email, password});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={{marginHorizontal: 20}}>
        <InputBox
          title={'Email'}
          keyboardType={'email-address'}
          autoComplete={'email'}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          title={'Password'}
          keyboardType={'passwprd-address'}
          autoComplete={'password'}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({email, password}, null, 4)}</Text> */}
      <SubmitButton
        btnTitle={'Login'}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not a register{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 10,
    // marginTop: 10,
    color: 'black',
    marginVertical: 10,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});
