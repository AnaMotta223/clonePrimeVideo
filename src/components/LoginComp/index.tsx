import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function LoginComp() {
  const [arrowPressed, setArrowPressed] = useState<boolean>(false);

  return (
    <>
      <View style={styles.login}>
        <Text style={styles.textLogin}>E-mail ou número de telefone</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.continue} activeOpacity={0.7}>
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Ao fazer login, você concorda com os{" "}
          <Text style={styles.termsOfUse}>Termos de uso do Prime Video</Text> e
          com os contratos de licença que podem ser encontrados no site da
          Amazon.
        </Text>
        <TouchableOpacity
          style={styles.btnArrow}
          activeOpacity={1}
          onPress={() => setArrowPressed(!arrowPressed)}
        >
          {arrowPressed ? (
            <View>
              <View style={styles.helpItems}>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={20}
                  color="#C4C4C4"
                />
                <Text style={styles.help}>Precisa de ajuda?</Text>
              </View>

              <Text style={styles.forgot}>Esqueci a senha</Text>
            </View>
          ) : (
            <>
              <MaterialIcons name="arrow-right" size={20} color="#C4C4C4" />
              <Text style={styles.help}>Precisa de ajuda?</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
