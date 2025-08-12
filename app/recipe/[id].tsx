import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Play, 
  ChefHat,
  Utensils 
} from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { allRecipes } from '@/data/recipes';

export default function RecipeDetailScreen() {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const recipe = allRecipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <Text>Recipe not found</Text>
      </SafeAreaView>
    );
  }

  const openYouTubeVideo = () => {
    const url = `https://www.youtube.com/watch?v=${recipe.youtubeId}`;
    Linking.openURL(url);
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
      flex: 1,
      backgroundColor: colors.background,
    },
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
    backButton: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.background,
    },
    favoriteButton: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.background,
    },
    imageContainer: {
      position: 'relative',
      height: 250,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 20,
    },
    recipeName: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    recipeDescription: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: 'rgba(255,255,255,0.9)',
    },
    content: {
      flex: 1,
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    infoItem: {
      alignItems: 'center',
    },
    infoLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
      marginTop: 4,
    },
    infoValue: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginTop: 2,
    },
    difficultyBadge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      marginTop: 4,
    },
    difficultyText: {
      fontSize: 12,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    youtubeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF0000',
      paddingVertical: 16,
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 12,
    },
    youtubeText: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginLeft: 8,
    },
    section: {
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitleText: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginLeft: 8,
    },
    ingredient: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.text,
      paddingVertical: 8,
      paddingLeft: 12,
      borderLeftWidth: 3,
      borderLeftColor: colors.primary,
      marginBottom: 8,
      backgroundColor: colors.surface,
      borderRadius: 8,
    },
    instructionContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 16,
      backgroundColor: colors.surface,
      padding: 16,
      borderRadius: 12,
    },
    stepNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    stepNumberText: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    instruction: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.text,
      lineHeight: 24,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={colors.text} strokeWidth={2} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            size={24} 
            color={isFavorite ? colors.error : colors.text} 
            fill={isFavorite ? colors.error : 'transparent'}
            strokeWidth={2} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <View style={styles.imageOverlay}>
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.recipeDescription}>{recipe.description}</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Clock size={24} color={colors.primary} strokeWidth={2} />
            <Text style={styles.infoLabel}>Total Time</Text>
            <Text style={styles.infoValue}>{recipe.prepTime + recipe.cookTime}m</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Users size={24} color={colors.primary} strokeWidth={2} />
            <Text style={styles.infoLabel}>Servings</Text>
            <Text style={styles.infoValue}>{recipe.servings}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Star size={24} color={colors.accent} fill={colors.accent} strokeWidth={2} />
            <Text style={styles.infoLabel}>Rating</Text>
            <Text style={styles.infoValue}>{recipe.rating}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <ChefHat size={24} color={colors.secondary} strokeWidth={2} />
            <Text style={styles.infoLabel}>Difficulty</Text>
            <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(recipe.difficulty) }]}>
              <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.youtubeButton} onPress={openYouTubeVideo}>
          <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
          <Text style={styles.youtubeText}>Watch Video Tutorial</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <Utensils size={24} color={colors.primary} strokeWidth={2} />
            <Text style={styles.sectionTitleText}>Ingredients</Text>
          </View>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <ChefHat size={24} color={colors.primary} strokeWidth={2} />
            <Text style={styles.sectionTitleText}>Instructions</Text>
          </View>
          {recipe.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instruction}>{instruction}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}