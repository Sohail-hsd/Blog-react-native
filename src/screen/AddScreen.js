import React, { useContext } from 'react';
import { Context } from '../Components/Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';


const AddScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)

    return <BlogPostForm onSubmitt={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Home'))
    }} 
    initial
    />
}

export default AddScreen