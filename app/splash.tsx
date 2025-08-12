import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ChefHat } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const { colors } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    appName: {
      fontSize: 48,
      fontFamily: 'Inter-Bold',
      color: colors.primary,
      marginTop: 20,
      letterSpacing: 2,
    },
    tagline: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      marginTop: 8,
      textAlign: 'center',
    },
    creditContainer: {
      position: 'absolute',
      bottom: 50,
      alignItems: 'center',
    },
    credit: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      textAlign: 'center',
    },
    developer: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: colors.primary,
      marginTop: 4,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ChefHat size={80} color={colors.primary} strokeWidth={1.5} />
        <Text style={styles.appName}>Khana</Text>
        <Text style={styles.tagline}>Discover Recipes from Around the World</Text>
      </View>
      
      <View style={styles.creditContainer}>
        <Text style={styles.credit}>Created by</Text>
        <Text style={styles.developer}>Sushant Mishra</Text>
      </View>
    </View>
  );
}