import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import MovieTheWheelOfTime from "../../mock/images/the_wheel_of_time.png";
import { MoviesWatching } from "../../mock/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MoviesCrime } from "../../mock/moviesCrime";
import { MoviesWatch } from "../../mock/moviesWatch";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MoviesContinue } from "../../components/MoviesContinue";
import { MoviesScience } from "../../mock/moviesScience";
import { styles } from "./style";

export default function ScrollHome() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.movieThumbnail}>
        <View style={styles.mainMovie}>
          <Image style={styles.mainImg} source={MovieTheWheelOfTime} />
          <View style={[styles.btnWatch, { transform: [{ translateY: -60 }] }]}>
            <AntDesign name="playcircleo" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 17 }}>Assista agora</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: -25 }}>
        <Text style={styles.movieText}>Continue Assistindo</Text>
        <FlatList
          style={{ marginLeft: 20 }}
          data={MoviesWatching}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MoviesContinue movieURL={item.moviesURL} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Filmes de Ficção Científica</Text>
        <FlatList
          style={{ marginLeft: 20 }}
          data={MoviesScience}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Assista em seu idioma</Text>
        <FlatList
          style={{ marginLeft: 20 }}
          data={MoviesWatch}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Filmes de Crime</Text>
        <FlatList
          style={{ marginLeft: 20 }}
          data={MoviesCrime}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}
