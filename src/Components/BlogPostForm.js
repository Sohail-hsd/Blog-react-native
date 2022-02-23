import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmitt, initialvalue }) => {
    const [title, setTitle] = useState(initialvalue.title)
    const [content, setContent] = useState(initialvalue.content)
    const [status, setStatus] = useState('')

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Enter Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(textTitle) => setTitle(textTitle)}
            />
            <Text style={styles.title}>Enter Content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(textContent) => setContent(textContent)}
                multiline={true}
                inlineImageLeft='search_icon'
            />
            <View style={styles.btn}>
                <Button
                    title='Add Blog Post'
                    onPress={() => {
                        if (title.length > 6 && content.length > 10) {
                            onSubmitt(title, content)
                        } else if (title.length < 6) {
                            setStatus("Title must be at least 6 characters.!")
                        } else if (content.length < 10) {
                            setStatus("Content must be at least 10 chatacters.!")
                        }
                    }}
                />
                <Text style={{ fontSize: 15, color: 'red' }}>{status.length != null && status}</Text>
            </View>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialvalue: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    form: {},
    title: {
        fontSize: 18,
        marginLeft: 5,
        marginVertical: 5,
    },
    input: {
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
    btn: {
        margin: 5,
        borderRadius: 4,
    },

})

export default BlogPostForm