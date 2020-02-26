import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        testID={'counter'}
      >
        You pressed the button {counter} times.
      </Text>
      <Button
        testID={'button'}
        onPress={() => setCounter(counter + 1)}
        title={'Press me'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
