import { View, Text, Image, TouchableOpacity } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import { styles } from "./style";
import ScrollHome from "../../components/ScrollHome";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>
      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={[styles.categoryText, { color: "#fff" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Infantil</Text>
        </TouchableOpacity>
      </View>
      <ScrollHome />
    </View>
  );
};
