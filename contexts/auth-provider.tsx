import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

interface AuthContextType {
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>,
    logOut: () => Promise<void>
}

interface User {
    name: string;
    email: string;
    password: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        recorevedUser()
    }, []);

    const recorevedUser = async () => {
        try {
            const  storageUser = await AsyncStorage.getItem("user")

            if(storageUser !== null){
                const parseUser:User = JSON.parse(storageUser)
                setUser(parseUser)
            }
        } catch (error) {
            console.log("Erro ao recorever usuário:", error);
        } finally{
            setLoading(false)
        }
    }


    const logOut = async () => {
        await AsyncStorage.removeItem("user")
        setUser(null)
    }


    if(loading){
        return <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    }

    const values = {
        user,
        setUser,
        logOut
    }
    return (
        <AuthContext value={values}>
            {children}
        </AuthContext>
    )
}

export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("UserAuth must be userd in this context")
    }

    return context
}