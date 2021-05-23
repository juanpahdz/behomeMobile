import React, {useState} from 'react';
import { View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './RegisterStyles';

const RegisterScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validateLogin = () => {
        if(email === "" || password === ""){
            Alert.alert("Todos los campos debe estar llenos");
        }
        else{
            setEmail("");
            setPassword("");
            navigation.navigate("ListApartments");
        }
    }
    return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
    <LinearGradient colors={[Colors.primarycolor, Colors.secondaryColor]} style={Styles.logoContainer}>
        <Image style={Styles.logo}></Image>
        <Text style={Styles.title}>Login</Text>
    </LinearGradient>
    <View style={Styles.inputDataContainer}>
        <TextInput defaultValue={email} inlineImageLeft="outline_email_black_24" inlineImagePadding={15} keyboardType="email-address" placeholder="Email" style={Styles.inputData} onChangeText={(text)=>{setEmail(text)}}></TextInput>
        <TextInput defaultValue={password} inlineImageLeft="outline_password_black_24" inlineImagePadding={15} secureTextEntry={true} placeholder="Password" style={Styles.inputData} onChangeText={(text)=>{setPassword(text)}}></TextInput>
        <TouchableOpacity onPress={() => validateLogin()}>
            <LinearGradient style={Styles.loginButton}>
                <Text style={Styles.textLoginbButton}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
</View>
}
export default RegisterScreen;