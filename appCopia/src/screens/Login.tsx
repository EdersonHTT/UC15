import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import logo from "../../assets/logo_vibe.png";
import bgImage from "../../assets/background.png";
import Build from 'expo-status-bar/plugin';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  return (
    <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Seu mundo, suas conexões</Text>
        </View>

        <View style={styles.loginForm}>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
                <TextInput placeholder="E-mail" style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
                <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
            </View>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            <Button text="Entrar" />
            <Text style={styles.signUp}>Não tem uma conta? <Text style={styles.signUpLink}>Cadastre-se</Text></Text>
        </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 70,
        width: '100%',
        height: 200,
    },
    logo: {
        width: 260,
        height: 160,
        
    },
    title: {
        fontSize: 22,
        color: '#bcbbbb',
    },
    loginForm: {
        padding: 20,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor:` linear-gradient(
        145deg,
        rgba(112, 71, 235, 0.45) 0%,
        rgba(155, 54, 232, 0.30) 45%,
        rgba(27, 11, 54, 0.88) 100%
        )`,
        borderColor: "rgba(255, 255, 255, 0.22)",
        borderRadius: 36,
        marginBottom: 100,
        width: '90%',
        gap: 10,
        paddingBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        fontSize: 19,
        width: '100%',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 20,
    },
    forgotPassword: {
        color: '#FF8979',
        textAlign: 'center',
        fontSize: 16,
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    signUp: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
    },
    signUpLink: {
        color: '#FF8979',
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        left: 10,
    }
})