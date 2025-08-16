import { StyleSheet } from "react-native";

export const onboardingStyle = () =>
    StyleSheet.create({
        containor: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: "100%",
            height: "100%",
            justifyContent: "flex-end"
        },
        overlay:{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        contentSection: {
            height: 360,
            backgroundColor: "white",
            width: "100%",
            borderTopRightRadius: "40%",
            paddingHorizontal: 24,
            paddingVertical: 60,
        },
        title: {
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#000",
        },
        subtitle: {
            fontSize: 16,
            color: "#555",
            marginBottom: 20,
        },
        button: {
            backgroundColor: "#000",
            paddingVertical: 14,
            borderRadius: 30,
            alignItems: "center",
            marginBottom: 16,
        },
        buttonText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
                }
    });

export const loginSIgnupStyle = () =>
    StyleSheet.create({
        containor: {
        flex: 1,
        backgroundColor: "#000",
        },
        image: {
        flex: 1,
        justifyContent: "flex-end",
        },
        overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        bottomCard: {
            backgroundColor: "#fff",
            borderTopRightRadius: "40%", 
            padding: 24,
            paddingBottom: 40,
        },
        title: {
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 24,
            color: "#000",
        },
        input: {
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 14,
            marginBottom: 16,
            fontSize: 16,
            color: "#000",
        },
        button: {
            backgroundColor: "#000",
            paddingVertical: 14,
            borderRadius: 30,
            alignItems: "center",
            marginTop: 10,
        },
        buttonText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
        },
        switchText: {
            textAlign: "center",
            marginTop: 16,
            color: "#555",
        },
        switchLink: {
            color: "#007bff",
            fontWeight: "500",
        },
    });

export const homepageStyle = () =>
   StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8FAFC",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 1,
      borderBottomColor: "#E5E7EB",
      marginTop: 40,
    },
    headerButton: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "600",
      color: "#1F2937",
    },
    avatar: {
      width: 80,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#E5E7EB",
      justifyContent: "center",
      alignItems: "center",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      marginHorizontal: 20,
      marginBottom: 20,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    searchIcon: {
      marginRight: 12,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: "#1F2937",
    },
    notesContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    notesGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingBottom: 100,
    },
    noteCard: {
      width: "48%",
      backgroundColor: "white",
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    noteContent: {
      flex: 1,
      marginRight: 8,
    },
    noteTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: "#1F2937",
      marginBottom: 8,
      lineHeight: 20,
    },
    notePreview: {
      fontSize: 12,
      color: "#6B7280",
      lineHeight: 16,
      marginBottom: 8,
    },
    priorityContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    priorityDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 6,
    },
    priorityText: {
      fontSize: 10,
      fontWeight: "600",
      textTransform: "uppercase",
    },
    addButton: {
      position: "absolute",
      bottom: 30,
      right: 30,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: "#3B82F6",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 16,
      fontSize: 16,
      color: "#6B7280",
    },
    emptyState: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 100,
    },
    emptyStateTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: "#374151",
      marginTop: 16,
      marginBottom: 8,
    },
    emptyStateText: {
      fontSize: 16,
      color: "#6B7280",
      textAlign: "center",
    },
  })



export const createNotesStyle = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#F8FAFC",
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 16,
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            borderBottomColor: "#E5E7EB",
            marginTop: 40,
        },
        headerButton: {
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: "600",
            color: "#1F2937",
        },
        content: {
            flex: 1,
            paddingHorizontal: 20,
        },
        inputContainer: {
            marginTop: 24,
        },
        label: {
            fontSize: 16,
            fontWeight: "600",
            color: "#374151",
            marginBottom: 8,
        },
        titleInput: {
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            fontSize: 16,
            color: "#1F2937",
            borderWidth: 1,
            borderColor: "#E5E7EB",
        },
        priorityContainer: {
            flexDirection: "row",
            gap: 12,
        },
        priorityOption: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            flex: 1,
        },
        priorityOptionSelected: {
            borderColor: "#3B82F6",
            backgroundColor: "#EFF6FF",
        },
        priorityDot: {
            width: 12,
            height: 12,
            borderRadius: 6,
            marginRight: 8,
        },
        priorityText: {
            fontSize: 14,
            fontWeight: "500",
            color: "#6B7280",
        },
        priorityTextSelected: {
            color: "#3B82F6",
        },
        contentInput: {
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            fontSize: 16,
            color: "#1F2937",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            minHeight: 200,
        },
        buttonContainer: {
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 20,
            gap: 12,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
        },
        cancelButton: {
            flex: 1,
            paddingVertical: 14,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            alignItems: "center",
        },
        cancelButtonText: {
            fontSize: 16,
            fontWeight: "600",
            color: "#6B7280",
        },
        saveButton: {
            flex: 1,
            paddingVertical: 14,
            borderRadius: 12,
            backgroundColor: "#3B82F6",
            alignItems: "center",
        },
        saveButtonDisabled: {
            backgroundColor: "#9CA3AF",
        },
        saveButtonText: {
            fontSize: 16,
            fontWeight: "600",
            color: "#FFFFFF",
        },
        })
