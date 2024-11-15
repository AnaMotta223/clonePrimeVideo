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
  mainMovie: {
    alignItems: "center",
    width: "100%",
  },
  btnWatch: {
    flexDirection: "row",
    gap: 5,
    marginLeft: 145,
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
  movieThumbnail: {
    width: "100%",
    alignItems: "center",
  },
  mainImg: {
    width: "100%",
  },
  movieText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
    paddingLeft: 20,
  },
});
