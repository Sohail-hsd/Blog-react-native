import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../Components/Context/BlogContext'

const CreateScreen = ({ route }) => {
    const { state } = useContext(Context)
    const id = route.params.id
    const blogPost = state.find((blogPost) => blogPost.id === id)
    return (
        <View>
            <Text>The Create Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CreateScreen