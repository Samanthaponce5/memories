import * as api from '../api'

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts()
      dispatch({
        type: 'FETCH_ALL',
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post)

      dispatch({
        type: 'CREATE',
        payload: data,
      })
    } catch (error) {
      console.log('ERROR:', error)
    }
  }
}

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post)
      dispatch({
        type: 'UPDATE',
        payload: data,
      })
    } catch (error) {
      console.log('ERROR', error)
    }
  }
}

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id)

      dispatch({
        type: 'DELETE',
        payload: id,
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }
}
