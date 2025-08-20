"use client"

import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { createNotesStyle } from "@/styles/styles"
import { useRouter , useLocalSearchParams } from "expo-router"
import axios from "axios"
import { API_BASE } from "@/constants/constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Priority = "low" | "medium" | "high"

interface CreateNoteScreenProps {
  onSave?: (note: { title: string; content: string; priority: Priority }) => void
  onCancel?: () => void
}

export default function CreateNoteScreen({ onSave, onCancel }: CreateNoteScreenProps) {

  const params = useLocalSearchParams();

  const [title, setTitle] = useState(params.title ? String(params.title) : "");
  const [content, setContent] = useState(params.content ? String(params.content) : "");
  const [priority, setPriority] = useState<Priority>("medium")

  const styles = createNotesStyle()
  const router = useRouter()

  

  const priorityOptions: { value: Priority; label: string; color: string }[] = [
    { value: "low", label: "Low", color: "#10B981" },
    { value: "medium", label: "Medium", color: "#FCD34D" },
    { value: "high", label: "High", color: "#FF6B9D" },
  ]

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      addNote()
    }
  }

  const addNote = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
        const res = await axios.post(`${API_BASE}/notes`, {
            title,
            content,
            priority
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        Alert.alert("Success", "Note created successfully!");
        setTitle("");
        setContent("");
        setPriority("medium");
        console.log(res.data);
    } catch (error) {
        
    }
  }



  const handleCancel = () => {
    router.back();
    setTitle("");
    setContent("");
    setPriority("medium");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Note</Text>
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
          <Text style={styles.saveButtonText}>Save Note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

