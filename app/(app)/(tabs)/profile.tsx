import { useAuth } from '@/contexts/auth-provider';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { user, logOut } = useAuth();


  return (
    <View style={styles.container}>
      <Text >Perfil</Text>
      <Text>Nome: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>password: {user?.password}</Text>
      <Button title="Sair da conta" color={"red"} onPress={logOut} />
    </View>
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
