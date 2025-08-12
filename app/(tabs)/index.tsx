import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';
import { allRecipes } from '@/data/recipes';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [featuredRecipes] = useState(allRecipes.slice(0, 20));

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
    },
    section: {
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    sectionTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginBottom: 4,
    },
    sectionSubtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      marginBottom: 16,
    },
    heroSection: {
      paddingHorizontal: 20,
      paddingVertical: 24,
      backgroundColor: colors.primary,
      marginHorizontal: 20,
      marginVertical: 16,
      borderRadius: 20,
    },
    heroTitle: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 8,
    },
    heroSubtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: 'rgba(255,255,255,0.9)',
      textAlign: 'center',
    },
    recipeGrid: {
      paddingHorizontal: 12,
    },
  });

  const renderRecipe = ({ item }: { item: any }) => (
    <View style={{ width: '50%' }}>
      <RecipeCard recipe={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Welcome to Khana</Text>
          <Text style={styles.heroSubtitle}>
            Discover authentic recipes from around the world
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Recipes</Text>
          <Text style={styles.sectionSubtitle}>
            Handpicked recipes just for you
          </Text>
        </View>

        <FlatList
          data={featuredRecipes}
          renderItem={renderRecipe}
          numColumns={2}
          style={styles.recipeGrid}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}