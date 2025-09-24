import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(auth)/index" 
        options={{ headerShown: false }} // <- hide header only here
      />
      <Stack.Screen 
        name="(auth)/login" 
        options={{ headerShown: false }} // optional: show header
      />
      <Stack.Screen 
        name="(auth)/register" 
        options={{ headerShown: false }}
      />
    </Stack>
  );
};