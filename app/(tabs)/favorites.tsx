import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';

export default function FavoritesScreen() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    icon: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />
      <View style={styles.content}>
        <View style={styles.icon}>
          <Heart size={64} color={colors.textSecondary} strokeWidth={1.5} />
        </View>
        <Text style={styles.title}>No Favorites Yet</Text>
        <Text style={styles.subtitle}>
          Start exploring recipes and tap the heart icon to save your favorites here!
        </Text>
      </View>
    </SafeAreaView>
  );
}