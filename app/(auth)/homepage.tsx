import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { homepageStyle } from '@/styles/styles';

const Homepage = () => {

    const styles = homepageStyle();

  return (
    <SafeAreaView style={styles.containor}>
      <Text>Homepage</Text>
    </SafeAreaView>
  )
}

export default Homepage