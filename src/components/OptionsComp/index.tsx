import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import LoginComp from "../LoginComp";
import AccountComp from "../AccountComp";

export default function OptionsComp() {
  const [isCheckedAccount, setIsCheckedAccount] = useState<boolean>(false);
  const [isCheckedLogin, setIsCheckedLogin] = useState<boolean>(true);

  return (
    <>
      <View style={styles.options}>
        <Text style={styles.welcome}>Bem-vindo</Text>
        <View
          style={isCheckedAccount ? styles.account : styles.accountUnchecked}
        >
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => {
              setIsCheckedAccount(!isCheckedAccount);
              setIsCheckedLogin(!isCheckedLogin);
            }}
            isChecked={isCheckedAccount}
            unCheckedImage={
              <Image source={require("../../assets/Unchecked.png")} />
            }
            checkedImage={
              <Image source={require("../../assets/Checked.png")} />
            }
            rightText={"Criar conta"}
            rightTextStyle={styles.textBoldCheckbox}
          />
          <Text style={styles.sideTextAccount}>É novo na Amazon?</Text>
        </View>
      </View>

      {isCheckedLogin === false && <AccountComp />}

      <View
        style={isCheckedLogin ? styles.loginChecked : styles.loginUnchecked}
      >
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            setIsCheckedLogin(!isCheckedLogin);
            setIsCheckedAccount(!isCheckedAccount);
          }}
          isChecked={isCheckedLogin}
          unCheckedImage={
            <Image source={require("../../assets/Unchecked.png")} />
          }
          checkedImage={<Image source={require("../../assets/Checked.png")} />}
          rightText={"Faça login"}
          rightTextStyle={styles.textBoldCheckbox}
        />
        <Text style={styles.sideTextLogin}>Já é cliente?</Text>
      </View>
      {isCheckedLogin === true && <LoginComp />}

      <Text style={isCheckedLogin ? styles.copyright : styles.copyrightAccount}>
        © 2021-2024 Amazon.com, Inc. ou suas afiliadas
      </Text>
    </>
  );
}
