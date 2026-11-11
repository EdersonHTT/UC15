import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Anime } from '../data/animes';

const Card = ({ anime }: { anime: Anime }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: anime.coverImage.large }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>Title: {anime.title.romaji}</Text>
        <Text style={styles.subTitle}>English Title: {anime.title.english}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#111827',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    width: 92,
    height: 124,
    marginRight: 12,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 20,
  },
})