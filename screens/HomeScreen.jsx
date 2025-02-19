import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {

    const data = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Fourth Item',
        },
        {
            id: '5',
            title: 'Fifth Item',
        },
        {
            id: '6',
            title: 'Sixth Item',
        },
        {
            id: '7',
            title: 'Seventh Item',
        },
        {
            id: '8',
            title: 'Eight Item',
        },
        {
            id: '9',
            title: 'Ninth Item',
        },
        {
            id: '10',
            title: 'Tenth Item',
        },
    ];

    function goToProfile() {
        navigation.navigate('Profile Screen');
    }

    function goToSingleTweet() {
        navigation.navigate('Tweet Screen');
    }

    function goToNewTweet() {
        navigation.navigate('New Tweet');
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => goToProfile()}>
                <Image style={styles.avatar} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.flexRow} onPress={() => goToProfile()}>
                    <Text numberOfLines={1} style={styles.tweetName}> 
                        {item.title} 
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}> 
                        @zuke 
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}> 
                        &middot; 
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}> 
                        12m 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => goToSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" />
                        <Text style={styles.textGray}> 69 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" />
                        <Text style={styles.textGray}> 69 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" />
                        <Text style={styles.textGray}> 69 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={22} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                <View style={styles.tweetSeparator}></View>
            )}
            />
            <TouchableOpacity style={styles.floatingButton}
            onPress={() => goToNewTweet()}>
                <AntDesign name="plus" size={26} color={'white'}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white',
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21,
    },
    flexRow: {
        flexDirection: 'row',
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222',
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray',
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 18,
    },
    textGray: {
        color: 'gray',
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    floatingButton: {
        width: 50, 
        height: 50,
        borderRadius: 25,
        borderColor: '#31a4f5',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 20,
        right: 12,
    },
    ml4: {
        marginLeft: 16,
    }
});