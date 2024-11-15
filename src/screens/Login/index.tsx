import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./style";
import CheckBox  from 'react-native-check-box'
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Login = () => {

  const [isCheckedAccount, setIsCheckedAccount] = useState<boolean>(false)
  const [isCheckedLogin, setIsCheckedLogin] = useState<boolean>(true)
  const [isCheckedPassword, setIsCheckedPassword] = useState<boolean>(false)
  const [arrowPressed, setArrowPressed] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      {isCheckedLogin ? (
      <>

       <View style={styles.options}>
      <Text style={styles.welcome}>Bem-vindo</Text>
      <View style={isCheckedAccount ? styles.account : styles.accountUnchecked}>
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setIsCheckedAccount(!isCheckedAccount);
            setIsCheckedLogin(!isCheckedLogin)
          }}
          isChecked={isCheckedAccount}
          unCheckedImage={<Image source={require('../../assets/Unchecked.png')}/>}
          checkedImage={<Image source={require('../../assets/Checked.png')}/>}
          rightText={"Criar conta"}
          rightTextStyle={styles.textBoldCheckbox}/>
        <Text style={styles.sideTextAccount}>É novo na Amazon?</Text>
      </View>
      <View style={isCheckedLogin ? styles.loginChecked : styles.loginUnchecked}>
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setIsCheckedLogin(!isCheckedLogin)
            setIsCheckedAccount(!isCheckedAccount)
          }}
          isChecked={isCheckedLogin}
          unCheckedImage={<Image source={require('../../assets/Unchecked.png')}/>}
          checkedImage={<Image source={require('../../assets/Checked.png')}/>}
          rightText={"Faça login"}
          rightTextStyle={styles.textBoldCheckbox}/>
        <Text style={styles.sideTextLogin}>Já é cliente?</Text>
      </View>
      </View>

      <View style={styles.login}>
          <Text style={styles.textLogin}>E-mail ou número de telefone</Text>
          <TextInput style={styles.input}/>
          <TouchableOpacity style={styles.continue} activeOpacity={0.7}>
            <Text style={styles.continueText}>Continuar</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Ao fazer login, você concorda com os <Text style={styles.termsOfUse}>Termos de uso do Prime Video</Text> e com os contratos de licença que podem ser encontrados no site da Amazon.</Text>
            <TouchableOpacity style={styles.btnArrow} activeOpacity={1} onPress={() => setArrowPressed(!arrowPressed)}>
            {arrowPressed ? (
              <View>
              <View style={styles.helpItems}>
              <MaterialIcons name="arrow-drop-down" size={20} color="#C4C4C4"/>
              <Text style={styles.help}>Precisa de ajuda?</Text> 
              </View>
              
              <Text style={styles.forgot}>Esqueci a senha</Text> 
              </View>
              ) : (
              <>
              <MaterialIcons name="arrow-right" size={20} color="#C4C4C4"/>
              <Text style={styles.help}>Precisa de ajuda?</Text> 
              </>
            )}
            </TouchableOpacity>
      </View>

      </>
      ) : (
        <>
        <View style={styles.options}>
       <Text style={styles.welcome}>Bem-vindo</Text>
       <View style={styles.account}>
       <CheckBox
           style={{flex: 1, padding: 10}}
           onClick={()=>{
             setIsCheckedAccount(!isCheckedAccount);
             setIsCheckedLogin(!isCheckedLogin)
           }}
           isChecked={isCheckedAccount}
           unCheckedImage={<Image source={require('../../assets/Unchecked.png')}/>}
           checkedImage={<Image source={require('../../assets/Checked.png')}/>}
           rightText={"Criar conta"}
           rightTextStyle={styles.textBoldCheckbox}/>
         <Text style={styles.sideTextAccount}>É novo na Amazon?</Text>
       </View>
      
       </View>
 
       <View style={styles.createAccount}>
           <Text style={styles.textCreateAccount}>Nome e sobrenome</Text>
           <TextInput style={styles.input}/>
           <Text style={styles.textCreateAccount}>Número de celular ou e-mail</Text>
           <TextInput style={styles.input}/>
           <Text style={styles.textCreateAccount}>Crie uma senha</Text>
           <TextInput style={styles.input}/>
           <CheckBox 
           style={{marginTop: 7, marginLeft: 5}}
           onClick={()=>{
             setIsCheckedPassword(!isCheckedPassword)
           }} 
           isChecked={isCheckedPassword} 
           checkedImage={<Image source={require('../../assets/Checked2.png')}/>} 
           unCheckedImage={<Image source={require('../../assets/Unchecked2.png')}/>} 
           checkBoxColor="#fff" 
           rightText="Mostrar senha" 
           rightTextStyle={{color: "#c4c4c4", fontSize: 12}}/>
           <TouchableOpacity style={styles.continue} activeOpacity={0.7}>
             <Text style={styles.continueText}>Continuar</Text>
           </TouchableOpacity>
           <Text style={styles.loginText}>Ao fazer login, você concorda com os <Text style={styles.termsOfUse}>Termos de uso do Prime Video</Text> e com os contratos de licença que podem ser encontrados no site da Amazon.</Text>
       </View>
       <View style={isCheckedLogin ? styles.loginChecked : styles.loginUnchecked}>
       <CheckBox
           style={{flex: 1, padding: 10}}
           onClick={()=>{
             setIsCheckedLogin(!isCheckedLogin)
             setIsCheckedAccount(!isCheckedAccount)
           }}
           isChecked={isCheckedLogin}
           unCheckedImage={<Image source={require('../../assets/Unchecked.png')}/>}
           checkedImage={<Image source={require('../../assets/Checked.png')}/>}
           rightText={"Faça login"}
           rightTextStyle={styles.textBoldCheckbox}/>
         <Text style={styles.sideTextLogin}>Já é cliente?</Text>
       </View>
       </>
      )
    }
    
     <Text style={isCheckedLogin ? styles.copyright : styles.copyrightAccount}>© 2021-2024 Amazon.com, Inc. ou suas afiliadas</Text>
    </View>
  );
};
