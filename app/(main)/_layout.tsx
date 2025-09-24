import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="schedule" options={{ title: "Time Schedule" }} />
      <Tabs.Screen name="homework" options={{ title: "Homework" }} />
      <Tabs.Screen name="todo" options={{ title: "Todo" }} />
      <Tabs.Screen name="vocabulary" options={{ title: "Vocabulary" }} />
    </Tabs>
  );
}
