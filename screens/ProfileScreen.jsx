import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { FlatList } from "react-native-gesture-handler";

export default function ProfileScreen() {

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

    const renderItem = ({item}) => (
        <View style={{marginVertical: 20}}>
            <Text> {item.title} </Text>
        </View>
    )

    const profileHeader = () => ( // making the entire page except the flat list a header so the entire profile page scrolls
        <View style={styles.container}>
            <Image 
            style={styles.backgroundImage}
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMXrpMaeP8J1M2e4OkqYHArVKdCMM5a-NhA&s',
            }}/>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}/>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}> Follow </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.profileName}> Luke Browne </Text>
                <Text style={styles.profileHandle}> @zuke </Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.profileContainerText}>
                    Generic Bio goes here. Some more text about stuff you don't really care about.
                    Jack from Ireland, Jack from Ireland, handshakes all around.
                </Text>
            </View>
            <View style={styles.locationContainer}>
                <EvilIcons name='location' size={24} color='gray'/>
                <Text style={styles.textGray}> Sligo, Ireland </Text>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.linkItem}
                onpress={() => Linking.openURL('https://www.linkedin.com/in/luke-browne-424a80188/')}>
                    <EvilIcons name="link" size={24} color='gray'/>
                    <Text style={styles.linkColor}> LinkedIn </Text>
                </TouchableOpacity>
                <View style={[styles.linkItem, styles.ml4]}>
                    <EvilIcons name="calendar" size={24} color='gray'/>
                    <Text style={styles.textGray}> Joined December 1999 </Text>
                </View>
            </View>
            <View style={styles.followContainer}>
                <View style={styles.followItem}>
                    <Text style={styles.followItemNumber}> 420 </Text>
                    <Text style={styles.followItemLabel}> Following </Text>
                </View>
                <View style={[styles.followItem, styles.ml4]}>
                    <Text style={styles.followItemNumber}> 9000 </Text>
                    <Text style={styles.followItemLabel}> Followers </Text>
                </View>
            </View>
            <View style={styles.separator}></View>
        </View>
    );

    return (
            <FlatList 
            style={styles.container}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (<View style={styles.separator}></View>)}
            ListHeaderComponent={profileHeader}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        width: 800,
        height: 120,
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: -30
    },
    followButton: {
        backgroundColor: '#0f1418',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    nameContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    profileHandle: {
        color: 'gray',
        marginTop: 1,
        marginLeft: 2
    },
    profileContainer: {
        paddingHorizontal: 10,
        marginTop: 8,
    },
    profileContainerText: {
        lineHeight: 18,
    },
    locationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 12,
    },
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 4,
    },
    textGray: {
        color: 'gray',
    },
    linkItem: {
        flexDirection: 'row'
    },
    linkColor: {
        color: '#1d9bf1'
    },
    ml4: {
        marginLeft: 14
    },
    followContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 12
    },
    followItem: {
        flexDirection: 'row'
    },
    followItemNumber: {
        fontWeight: 'bold'
    },
    followItemLabel: {
        marginLeft: 2
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
});