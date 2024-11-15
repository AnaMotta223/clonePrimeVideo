import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";

interface PropsCard {
  movieURL: ImageSourcePropType;
}

export const MoviesCard = ({ movieURL }: PropsCard) => {
  return (
    <TouchableOpacity>
      <Image style={styles.img} source={movieURL} />
    </TouchableOpacity>
  );
};
