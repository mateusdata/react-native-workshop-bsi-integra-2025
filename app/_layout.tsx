import AuthProvider from "@/contexts/auth-provider";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <AuthProvider>
                <Slot />
            </AuthProvider>
        </GestureHandlerRootView>
    );
}

const styles = {
    container: { flex: 1 }
}