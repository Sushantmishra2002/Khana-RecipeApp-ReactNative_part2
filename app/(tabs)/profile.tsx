import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Settings, Info, Moon, Sun } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';

export default function ProfileScreen() {
  const { colors, isDark, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    profileSection: {
      alignItems: 'center',
      paddingVertical: 32,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginBottom: 32,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    userName: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginBottom: 4,
    },
    userEmail: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: colors.surface,
      borderRadius: 12,
      marginBottom: 12,
    },
    menuIcon: {
      marginRight: 16,
    },
    menuText: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    creditSection: {
      alignItems: 'center',
      paddingVertical: 32,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: 'auto',
    },
    creditText: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      textAlign: 'center',
    },
    developerName: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: colors.primary,
      marginTop: 4,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" />
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <User size={32} color="#FFFFFF" strokeWidth={2} />
          </View>
          <Text style={styles.userName}>Food Lover</Text>
          <Text style={styles.userEmail}>foodie@khana.app</Text>
        </View>

        <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
          <View style={styles.menuIcon}>
            {isDark ? (
              <Sun size={24} color={colors.text} strokeWidth={2} />
            ) : (
              <Moon size={24} color={colors.text} strokeWidth={2} />
            )}
          </View>
          <Text style={styles.menuText}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Settings size={24} color={colors.text} strokeWidth={2} />
          </View>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Info size={24} color={colors.text} strokeWidth={2} />
          </View>
          <Text style={styles.menuText}>About</Text>
        </TouchableOpacity>

        <View style={styles.creditSection}>
          <Text style={styles.creditText}>Crafted with ❤️ by</Text>
          <Text style={styles.developerName}>Sushant Mishra</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}