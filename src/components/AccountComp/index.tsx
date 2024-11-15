import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AccountComp() {
  const [isCheckedPassword, setIsCheckedPassword] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home')
  }

  return (
    <>
      <View style={styles.createAccount}>
        <Text style={styles.textCreateAccount}>Nome e sobrenome</Text>
        <TextInput style={styles.input} />
        <Text style={styles.textCreateAccount}>
          Número de celular ou e-mail
        </Text>
        <TextInput style={styles.input} />
        <Text style={styles.textCreateAccount}>Crie uma senha</Text>
        <TextInput style={styles.input} />
        <CheckBox
          style={{ marginTop: 7, marginLeft: 5 }}
          onClick={() => {
            setIsCheckedPassword(!isCheckedPassword);
          }}
          isChecked={isCheckedPassword}
          checkedImage={<Image source={require("../../assets/Checked2.png")} />}
          unCheckedImage={
            <Image source={require("../../assets/Unchecked2.png")} />
          }
          checkBoxColor="#fff"
          rightText="Mostrar senha"
          rightTextStyle={{ color: "#c4c4c4", fontSize: 12 }}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.continue} activeOpacity={0.7}>
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Ao fazer login, você concorda com os{" "}
          <Text style={styles.termsOfUse}>Termos de uso do Prime Video</Text> e
          com os contratos de licença que podem ser encontrados no site da
          Amazon.
        </Text>
      </View>
    </>
  );
}
