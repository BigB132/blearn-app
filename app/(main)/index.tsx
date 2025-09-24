import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/global";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signOut();
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
