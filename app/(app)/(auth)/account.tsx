import { useAuth } from '@/contexts/auth-provider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Account() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const { setUser, user } = useAuth()


    const onSubmit = async (data: { name: string, password: string, email: string }) => {
        if (!data.name || !data.email || !data.password) return alert("Por favor, preencha todos os campos.")
        setUser({ name: data.name, email: data.email, password: parseInt(data.password) })
        await AsyncStorage.setItem("user", JSON.stringify(data))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textConmtainer}>Create Account</Text>
            <View style={styles.constainerForm}>
                <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Name' />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <TextInput style={styles.input} keyboardType='numeric' value={password} onChangeText={setPassword} placeholder='password' />
                <View style={styles.buttonWrapper}>
                    <Button title="Criar conta" onPress={() => onSubmit({ name, email, password })} color="#2992e7" />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    textConmtainer: { fontSize: 18, marginBottom: 18 },
    constainerForm: { width: "80%", justifyContent: "center", alignItems: "center", marginTop: 18 },
    input: { borderWidth: 1, borderColor: '#000', width: "90%", height: 40, marginBottom: 10, padding: 10, },
    button: { width: "90%", height: 40, borderRadius: 12, backgroundColor: "#2992e7ff", justifyContent: "center", alignItems: "center", marginTop: 10 },
    buttonWrapper: { width: "90%", marginTop: 18 }
})