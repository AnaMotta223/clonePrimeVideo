import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "center",
  },
  welcome: {
    marginRight: 250,
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
  options: {
    alignItems: "center",
    marginTop: 50,
    width: "90%",
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  accountUnchecked: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#424E57",
  },
  sideTextAccount: {
    color: "#fff",
    fontWeight: "500",
    marginRight: 94,
    marginTop: 3,
    fontSize: 14,
  },
  textBoldCheckbox: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginChecked: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  loginUnchecked: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "#424E57",
  },
  sideTextLogin: {
    color: "#fff",
    fontWeight: "500",
    marginRight: 140,
    marginTop: 3,
    fontSize: 14,
  },
  textLogin: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  textCreateAccount: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
  },
  login: {
    gap: 7,
    width: "85%",
    marginTop: 15,
  },
  createAccount: {
    gap: 9,
    width: "85%",
    marginTop: 8,
  },
  continue: {
    backgroundColor: "#0D99FF",
    height: 50,
    marginTop: 15,
    borderRadius: 3,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 12,
  },
  loginText: {
    color: "#C4C4C4",
    marginTop: 10,
  },
  termsOfUse: {
    textDecorationLine: "underline",
    color: "#40AEFF",
  },
  help: {
    color: "#40AEFF",
    fontWeight: "500",
  },
  forgot: {
    color: "#40AEFF",
    fontWeight: "500",
    marginLeft: 20,
  },
  helpItems: {
    flexDirection: "row",
  },
  btnArrow: {
    flexDirection: "row",
    marginLeft: -5,
  },
  copyright: {
    color: "#C4C4C4",
    fontWeight: "500",
    marginTop: 176,
  },
  copyrightAccount: {
    color: "#C4C4C4",
    fontWeight: "500",
    marginTop: 110,
  },
});
