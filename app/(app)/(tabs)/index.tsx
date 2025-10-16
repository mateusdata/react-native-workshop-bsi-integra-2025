import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/contexts/auth-provider';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hello World 👋</ThemedText>
      <HelloWave />
      <ThemedText type="subtitle" style={styles.message}>
        Você está logado{user?.name ? `, ${user.name}` : ''}!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 16,
  },
  message: {
    marginTop: 8,
    textAlign: 'center',
  },
});
