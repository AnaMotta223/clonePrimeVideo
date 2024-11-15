import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    paddingTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  amazonLogoImg: {
    marginTop: -38,
    marginLeft: 30,
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "gray",
  },
});
