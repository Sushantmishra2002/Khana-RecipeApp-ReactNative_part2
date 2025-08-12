import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Clock, Users, Star, ChefHat } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Recipe } from '@/data/recipes';
import { router } from 'expo-router';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { colors } = useTheme();

  const handlePress = () => {
    router.push(`/recipe/${recipe.id}`);
  };


  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return colors.success;
      case 'Medium': return colors.warning;
      case 'Hard': return colors.error;
      default: return colors.textSecondary;
    }
  };

  const styles = StyleSheet.create({
    container: {
      margin: 8,
      borderRadius: 16,
      backgroundColor: colors.surface,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      overflow: 'hidden',
    },
    imageContainer: {
      position: 'relative',
      height: 200,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    topBadge: {
      position: 'absolute',
      top: 12,
      right: 12,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.9)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    rating: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#1F2937',
      marginLeft: 4,
    },
    difficultyBadge: {
      position: 'absolute',
      top: 12,
      left: 12,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    difficultyText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    cuisineBadge: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      backgroundColor: colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    cuisineText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    content: {
      padding: 16,
    },
    name: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      lineHeight: 20,
      marginBottom: 12,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: colors.textSecondary,
      marginLeft: 4,
    },
    caloriesBadge: {
      backgroundColor: colors.accent,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    caloriesText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#1F2937',
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
        <View style={styles.imageContainer}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <View style={styles.overlay} />
          
          <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(recipe.difficulty) }]}>
            <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
          </View>
          
          <View style={styles.topBadge}>
            <Star size={12} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.rating}>{recipe.rating}</Text>
          </View>
          
          <View style={styles.cuisineBadge}>
            <Text style={styles.cuisineText}>{recipe.cuisine}</Text>
          </View>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={2}>{recipe.name}</Text>
          <Text style={styles.description} numberOfLines={2}>{recipe.description}</Text>
          
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Clock size={14} color={colors.textSecondary} />
              <Text style={styles.infoText}>{recipe.prepTime + recipe.cookTime}m</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Users size={14} color={colors.textSecondary} />
              <Text style={styles.infoText}>{recipe.servings}</Text>
            </View>
            
            <View style={styles.caloriesBadge}>
              <Text style={styles.caloriesText}>{recipe.calories} cal</Text>
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );
}