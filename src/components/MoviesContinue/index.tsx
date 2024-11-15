import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";

interface PropsCard {
  movieURL: ImageSourcePropType;
}

export const MoviesContinue = ({ movieURL }: PropsCard) => {
  return (
    <TouchableOpacity>
      <Image style={styles.img} source={movieURL} />
      <AntDesign
        style={{ marginLeft: 5, transform: [{ translateY: -35 }] }}
        name="playcircleo"
        size={22}
        color="#fff"
      />
    </TouchableOpacity>
  );
};
