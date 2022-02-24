import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../Components/Context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context)
    const id = route.params.id
    const blogPost = state.find((blogPost) => blogPost.id === id)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => ( // Smart return
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
                    <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
            )
        })

    }, [navigation])

    return (
        <>
            <Text style={[styles.title, { alignSelf: 'center' }]} >
                The Blog Post - {id}
            </Text>
            <View style={styles.frame}>
                <Text style={styles.title} >{blogPost.title}</Text>
                <Text style={styles.title}>Blog Post.</Text>
                <Text style={styles.content} >{blogPost.content}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    frame: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        paddingBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginTop: 10,
    },
    content: {
        marginTop: 5,
        borderWidth: 1,
        marginHorizontal: 5,
        padding: 5,
        fontSize: 15,
        borderRadius: 5,
    }
})

export default ShowScreen