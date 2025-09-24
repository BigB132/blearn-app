import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1d313fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    color: "#fff",
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#2f4f66ff",
    marginBottom: 15,
    fontSize: 16,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: "80%",
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#10b981",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginText: {
    color: "#2563eb",
    marginTop: 10,
    fontSize: 14,
  },
});
