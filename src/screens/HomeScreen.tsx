import React from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { UseMovies } from '../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel'
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get("window")

export const HomeScreen = () => {
    const { now_Playing, isLoading, popular, topRated, upcoming } = UseMovies()
    const { top } = useSafeAreaInsets();
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <ActivityIndicator size={80} />
            </View>
        )
    }


    return (


        <ScrollView>


            <View style={{ marginTop: top + 20 }}>

                <View style={{
                    height: 440
                }}>
                    <Carousel
                        data={now_Playing}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}

                    />
                </View>

                <HorizontalSlider movies={popular} title={
                    "Popular"
                } />
                <HorizontalSlider movies={topRated} title={
                    "top rated"
                } />
                <HorizontalSlider movies={upcoming} title={
                    "Upcoming"
                } />


            </View>
        </ScrollView>
    )
}
