import { View, Text } from 'react-native';
import Intro from './app/screens/Intro';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

export default function App() {
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result)); // Parse JSON properly
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <View>
      {/* <Intro onFinish={(userData) => setUser(userData)} /> */}
      <NoteScreen user = {user} />
    </View>
  );
}
