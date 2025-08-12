import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search as SearchIcon, Filter, X } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';
import { allRecipes } from '@/data/recipes';

export default function SearchScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const cuisines = ['All', ...Array.from(new Set(allRecipes.map(r => r.cuisine)))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCuisine = !selectedCuisine || selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
      const matchesDifficulty = !selectedDifficulty || selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCuisine && matchesDifficulty;
    });
  }, [searchQuery, selectedCuisine, selectedDifficulty]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    searchContainer: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: colors.surface,
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.text,
      marginLeft: 12,
    },
    filtersContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    filterScroll: {
      flexDirection: 'row', 
      flexWrap: 'wrap',
      gap: 8,
    },
    filterChip: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
    },
    filterChipActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    filterText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    filterTextActive: {
      color: '#FFFFFF',
    },
    resultsContainer: {
      flex: 1,
      paddingHorizontal: 12,
    },
    resultsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    resultsText: {
      fontSize: 18,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    clearButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: colors.error,
      borderRadius: 16,
    },
    clearText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
      marginLeft: 4,
    },
    noResults: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 60,
    },
    noResultsText: {
      fontSize: 18,
      fontFamily: 'Inter-SemiBold',
      color: colors.textSecondary,
      textAlign: 'center',
    },
  });

  const renderRecipe = ({ item }: { item: any }) => (
    <View style={{ width: '50%' }}>
      <RecipeCard recipe={item} />
    </View>
  );

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCuisine('');
    setSelectedDifficulty('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search Recipes" showSearch={false} />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <SearchIcon size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes, cuisines, ingredients..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <View style={styles.filtersContainer}>
          <View style={styles.filterScroll}>
            {cuisines.map((cuisine) => (
              <TouchableOpacity
                key={cuisine}
                style={[
                  styles.filterChip,
                  (selectedCuisine === cuisine || (cuisine === 'All' && !selectedCuisine)) && styles.filterChipActive
                ]}
                onPress={() => setSelectedCuisine(cuisine === 'All' ? '' : cuisine)}
              >
                <Text style={[
                  styles.filterText,
                  (selectedCuisine === cuisine || (cuisine === 'All' && !selectedCuisine)) && styles.filterTextActive
                ]}>
                  {cuisine}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={[styles.filtersContainer, { marginTop: 8 }]}>
          <View style={styles.filterScroll}>
            {difficulties.map((difficulty) => (
              <TouchableOpacity
                key={difficulty}
                style={[
                  styles.filterChip,
                  (selectedDifficulty === difficulty || (difficulty === 'All' && !selectedDifficulty)) && styles.filterChipActive
                ]}
                onPress={() => setSelectedDifficulty(difficulty === 'All' ? '' : difficulty)}
              >
                <Text style={[
                  styles.filterText,
                  (selectedDifficulty === difficulty || (difficulty === 'All' && !selectedDifficulty)) && styles.filterTextActive
                ]}>
                  {difficulty}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsText}>
            {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''} Found
          </Text>
          {(searchQuery || selectedCuisine || selectedDifficulty) && (
            <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
              <X size={12} color="#FFFFFF" />
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>

        {filteredRecipes.length > 0 ? (
          <FlatList
            data={filteredRecipes}
            renderItem={renderRecipe}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <View style={styles.noResults}>
            <SearchIcon size={48} color={colors.textSecondary} />
            <Text style={styles.noResultsText}>
              No recipes found.{'\n'}Try adjusting your search or filters.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}