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
        containor: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    });