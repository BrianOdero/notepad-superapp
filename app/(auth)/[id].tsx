"use client"

import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from "react"
import { createNotesStyle } from "@/styles/styles"
import { useRouter, useLocalSearchParams } from "expo-router"
import axios from "axios"
import { API_BASE } from "@/constants/constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Priority = "low" | "medium" | "high"

interface Note {
  id: number
  title: string
  content: string
  priority: Priority
}

export default function EditNoteScreen() {
  const styles = createNotesStyle()
  const router = useRouter()
  const params = useLocalSearchParams()

  // Extract parameters with proper typing
  const id = params.id ? parseInt(params.id as string) : null;
  const initialTitle = params.title as string;
  const initialContent = params.content as string;
  const initialPriority = params.priority as Priority;

  // Set initial state directly from params
  const [title, setTitle] = useState(initialTitle || "")
  const [content, setContent] = useState(initialContent || "")
  const [priority, setPriority] = useState<Priority>(initialPriority || "medium")

  const priorityOptions: { value: Priority; label: string; color: string }[] = [
    { value: "low", label: "Low", color: "#10B981" },
    { value: "medium", label: "Medium", color: "#FCD34D" },
    { value: "high", label: "High", color: "#FF6B9D" },
  ]

  useEffect(() => {
    if (!id) {
      Alert.alert("Error", "Note ID missing")
      router.back()
    }
  }, [id])

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      updateNote()
    } else {
      Alert.alert("Validation Error", "Title and content are required")
    }
  }

  const updateNote = async () => {
    if (!id) return;
    
    const token = await AsyncStorage.getItem("token")
    try {
      await axios.put(
        `${API_BASE}/notes/${id}`,
        {
          title,
          content,
          priority,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      Alert.alert("Success", "Note updated successfully!")
      router.replace("/(auth)/homepage")
      
    } catch (error: any) {
      console.error("Update error:", error)
      let errorMessage = "Failed to update note"
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error
      } else if (error.message) {
        errorMessage = error.message
      }
      
      Alert.alert("Error", errorMessage)
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Note</Text>
        <TouchableOpacity onPress={handleSave} style={styles.headerButton}>
          <Ionicons name="checkmark" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.titleInput}
            placeholder="Enter note title..."
            placeholderTextColor="#9CA3AF"
            value={title}
            onChangeText={setTitle}
            maxLength={100}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Priority</Text>
          <View style={styles.priorityContainer}>
            {priorityOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[styles.priorityOption, priority === option.value && styles.priorityOptionSelected]}
                onPress={() => setPriority(option.value)}
              >
                <View style={[styles.priorityDot, { backgroundColor: option.color }]} />
                <Text style={[styles.priorityText, priority === option.value && styles.priorityTextSelected]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Content</Text>
          <TextInput
            style={styles.contentInput}
            placeholder="Write your note here..."
            placeholderTextColor="#9CA3AF"
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.saveButton, (!title.trim() || !content.trim()) && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={!title.trim() || !content.trim()}
        >
          <Text style={styles.saveButtonText}>Update Note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}