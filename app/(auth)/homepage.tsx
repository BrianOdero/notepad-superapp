"use client"

import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { homepageStyle } from "@/styles/styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useLocalSearchParams, useRouter } from "expo-router"
import axios from "axios"
import { API_BASE } from "@/constants/constants"
import { useEffect, useState } from "react"

interface Note {
  id: number
  title: string
  content: string
  priority: "low" | "medium" | "high"
  color: string
}

export default function Homepage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const router = useRouter()
  const params = useLocalSearchParams()

  const handleLogOut = async () => {
    AsyncStorage.removeItem("token")
    AsyncStorage.removeItem("username")
    router.replace("/loginSignup")
  }

  const handleAddNote = async () => {
    router.push("/(auth)/createNotes")
  }

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const token = await AsyncStorage.getItem("token")
      const res: { data: Note[] } = await axios.get(`${API_BASE}/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setNotes(res.data)
    } catch (error) {
      console.error("Error fetching notes:", error)
      setNotes([])
    } finally {
      setLoading(false)
    }
  }

   const onRefresh = () => {
    setRefreshing(true)
    fetchNotes()
    setRefreshing(false)
  }

  const getPriorityColor = (priority: Note["priority"]): string => {
    switch (priority) {
      case "high":
        return "#FF6B9D"
      case "medium":
        return "#FCD34D"
      case "low":
        return "#10B981"
      default:
        return "#9CA3AF"
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const styles = homepageStyle()

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={styles.loadingText}>Loading notes...</Text>
        </View>
      </SafeAreaView>
    )
  }

  const renderNoteCard = (note: Note) => {
    const color = getPriorityColor(note.priority)

    return (
      <TouchableOpacity key={note.id} style={styles.noteCard}>
        <View style={styles.noteContent}>
          <Text style={styles.noteTitle}>{note.title}</Text>
          <Text style={styles.notePreview}>{note.content}</Text>
          <View style={styles.priorityContainer}>
            <View style={[styles.priorityDot, { backgroundColor: color }]} />
            <Text style={[styles.priorityText, { color }]}>{note.priority.toUpperCase()}</Text>
          </View>
        </View>
        <TouchableOpacity
          key={note.id}
          onPress={() => {
            router.push({
              pathname: "/(auth)/[id]",
              params: {
                id: note.id, // Pass the note ID
                title: note.title,
                content: note.content,
                priority: note.priority
              }
            })
          }}
        >
          <Ionicons name="pencil" size={16} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello {params.username}</Text>
        <TouchableOpacity style={styles.avatar} onPress={handleLogOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search notes..." placeholderTextColor="#9CA3AF" />
        <Ionicons name="options" size={20} color="#9CA3AF" />
      </View>
      <ScrollView 
        style={styles.notesContainer} 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#3B82F6"]}
            tintColor="#3B82F6"
          />
        }
      >
        {notes.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={64} color="#9CA3AF" />
            <Text style={styles.emptyStateTitle}>No Notes Found</Text>
            <Text style={styles.emptyStateText}>Create your first note to get started!</Text>
          </View>
        ) : (
          <View style={styles.notesGrid}>{notes.map(renderNoteCard)}</View>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
