import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../Components/Context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context)

    // Edit The Header.
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <Feather name='plus' size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    console.log(state)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(value) => value.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.item}>{item.title} - {item.id} </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name='trash-2' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
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
    },
    btn: {
        marginBottom: 20
    }
})

export default IndexScreen