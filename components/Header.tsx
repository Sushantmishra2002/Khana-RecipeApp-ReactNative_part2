import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, Moon, Sun, ChefHat } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

interface HeaderProps {
  showSearch?: boolean;
  title?: string;
}

export default function Header({ showSearch = true, title }: HeaderProps) {
  const { colors, isDark, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    logo: {
      marginRight: 12,
    },
    appName: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.primary,
      letterSpacing: 1,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    iconButton: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <View style={styles.logo}>
          <ChefHat size={28} color={colors.primary} strokeWidth={2} />
        </View>
        {title ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <Text style={styles.appName}>Khana</Text>
        )}
      </View>
      
      <View style={styles.rightSection}>
        {showSearch && (
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/(tabs)/search')}
          >
            <Search size={20} color={colors.text} strokeWidth={2} />
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={toggleTheme}
        >
          {isDark ? (
            <Sun size={20} color={colors.text} strokeWidth={2} />
          ) : (
            <Moon size={20} color={colors.text} strokeWidth={2} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}