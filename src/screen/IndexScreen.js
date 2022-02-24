import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../Components/Context/BlogContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()
        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        })
        return () => {
            listener.remove()
        }
    }, []);

    // Edit The Header.
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <MaterialIcons name='add-box' size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    return (
        <View>
            {state.length === 0 ?
                <View style={{ justifyContent: 'center', marginTop: 250 }}>
                    <Text style={styles.msg} >No Blog Right Now!</Text>
                    <Text style={styles.msg} >Tap on the <MaterialIcons style={{ color: '#989c9e', }} name='add-box' size={30} /> to Create Some.!</Text>
                </View> :
                <FlatList
                    data={state}
                    keyExtractor={(value) => value.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id })}>
                                <View style={styles.row}>
                                    <Text style={styles.item}>{item.id} -- {item.title} </Text>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <MaterialCommunityIcons style={styles.icon} name='delete' />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />}
        </View>
    )
}



const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    item: {
        marginVertical: 10,
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
        color: 'red',
    },
    btn: {
        marginBottom: 20
    },
    msg: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#989c9e',
        // marginVertical: 300,
    }

})

export default IndexScreen