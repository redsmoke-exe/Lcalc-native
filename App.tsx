// LoveCalculator.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight, Alert } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import styles from './styles';

const LoveCalculator: React.FC = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [lovePercentage, setLovePercentage] = useState<number | null>(null);
  const [loveMessage, setLoveMessage] = useState<string>('');
  const confettiRef = useRef<ConfettiCannon | null>(null);

  const hashFnv32a = (str: string): number => {
    let hash = 0x811c9dc5;

    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash +=
        (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }

    return hash >>> 0;
  };

  const calculateLovePercentage = () => {
    if (name1.trim() === '' || name2.trim() === '') {
      // If either input is empty, do not calculate and show an alert or message
      Alert.alert('Please enter names in both boxes before calculating.');
      return;
    }
    const combinedNames = name1.toLowerCase() + name2.toLowerCase();
    const hash = hashFnv32a(combinedNames);

    const lovePercentage = hash % 101;

    setLovePercentage(lovePercentage);
    setLoveMessage(getLoveMessage(lovePercentage));

    setTimeout(() => {
      // If love percentage is more than 80%, trigger confetti animation
      if (lovePercentage > 80 && confettiRef.current) {
        confettiRef.current.start();
      }
    }, 500);
  };

  const getLoveMessage = (percentage: number): string => {
    if (percentage >= 80) {
      return "Wow! You are a perfect match! 💖";
    } else if (percentage >= 60) {
      return "Great compatibility! Keep the love alive. 😊";
    } else if (percentage >= 40) {
      return "Not bad! There's room for improvement. 😉";
    } else {
      return "Hmm, there might be some challenges. 🤔";
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bg_img.jpeg')}
      style={styles.backgroundImage}
      blurRadius={10}
    >
      <View style={styles.container}>
        {lovePercentage && lovePercentage > 80 && (
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} ref={confettiRef} />
        )}

        <Text style={styles.heading}>Love Percentage Calculator</Text>
        <View>
          <Text style={styles.fnameLabel}>Your Name:</Text>
          <TextInput
            style={styles.input}
            value={name1}
            onChangeText={(text) => setName1(text)}
          />
        </View>
        <View>
          <Text style={styles.snameLabel}>Partner Name:</Text>
          <TextInput
            style={styles.input2}
            value={name2}
            onChangeText={(text) => setName2(text)}
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={calculateLovePercentage}
          underlayColor="#1E88E5" // Customize the underlay color
          disabled={name1.trim() === '' || name2.trim() === ''}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
        {lovePercentage !== null && (
          <View>
          <Text style={styles.result}>Result: {lovePercentage}%</Text>
          <View style={styles.loveMessageContainer}>
            <Text style={styles.loveMessage}>{loveMessage}</Text>
          </View>
        </View>
      )}
    </View>
    </ImageBackground>
  );
};

export default LoveCalculator;
