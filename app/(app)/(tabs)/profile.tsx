import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/contexts/auth-provider';
import { Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const { user, logOut } = useAuth();


  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Perfil</ThemedText>
      <ThemedText>Nome: {user?.name}</ThemedText>
      <ThemedText>Email: {user?.email}</ThemedText>
      <ThemedText>password: {user?.password}</ThemedText>
      <Button title="Sair da conta" color={"red"} onPress={logOut} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8, 
    padding: 16 
  },
});
