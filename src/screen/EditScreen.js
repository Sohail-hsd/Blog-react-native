import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { Context } from '../Components/Context/BlogContext'
import BlogPostForm from '../Components/BlogPostForm'

const EditScreen = ({ navigation, route }) => {
    const id = route.params.id
    const { state, updateBlogPost } = useContext(Context)
    const blogPost = state.find((state) => state.id === id)

    return <BlogPostForm
        initialvalue={{ title: blogPost.title, content: blogPost.content }}
        onSubmitt={(title, content) => {
            updateBlogPost(id, title, content, () => navigation.pop())
        }} />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 5,
        margin: 5,
    },
    input: {
        borderWidth: 1,
        padding: 3,
        marginHorizontal: 5
    },
    btn: {
        marginTop: 10,
        marginHorizontal: 5,
    }
})

export default EditScreen