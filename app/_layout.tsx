import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function RootLayout() {
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    const subscription = router.listen(() => {
        async function checkToken() {
            const storedToken = await SecureStore.getItemAsync("accessToken");
            setToken(storedToken);
            setIsReady(true);
        }
        checkToken();
    })
    return subscription;
  }, []);

  useEffect(() => {
    if (!isReady || !navigationState?.key) {
      return;
    }

    if (token) {
      // User is logged in
      router.replace("/(main)");
    } else {
      // User is not logged in
      router.replace("/(auth)");
    }
  }, [isReady, token, navigationState?.key]);

  if (!isReady) {
    return null; // or a loading spinner
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}