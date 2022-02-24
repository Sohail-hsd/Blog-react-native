import createDataContext from './createDataContext'
import jsonServer from '../../api/jsonServer'


// Reducer
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload // This will return all the blog post in the jsonServer array.
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
            return state
    }
}

// Json Server Request.
const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/BlogPost')
        dispatch({ type: 'get_blogpost', payload: response.data })
    }
}

// Function/ Action
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/BlogPost', { title, content })
        // dispatch({ type: 'add_blogpost', payload: { title, content } })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
        await jsonServer.delete(`/BlogPost/${id}`)

    }
}

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/BlogPost/${id}`,{ title, content })
        dispatch({ type: 'update_blogpost', payload: { id, title, content } })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts },
    []
)
