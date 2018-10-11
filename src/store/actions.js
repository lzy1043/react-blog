import axios from 'axios'
import { API_BASE_URL } from '../config'

axios.defaults.baseURL = API_BASE_URL

axios.interceptors.response.use(response => {
  const { status, data } = response
  if (status === 200) {
    return data
  }
  return response
}, err => {
  return Promise.reject(err)
})

const updateArticles = (article) => {
  return {
    type: 'UPDATE_ARTICLES',
    payload: article
  }
}

const updateCategory = (category) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: category
  }
}

const updateTags = (tags) => {
  return {
    type: 'UPDATE_TAGS',
    payload: tags
  }
}

const updateArticleContent = content => {
  return {
    type: 'UPDATE_ARTICLE_CONTENT',
    payload: content
  }
}



export const fetchArticles = (page) => {
  return dispatch => {
    return axios.get(`/article?page=${page}`)
      .then(json => {
        const { code, data } = json
        if (code === 0) {
          dispatch(updateArticles(data))
        }
      })
  }
}

export const fetchCategorys = () => {
  return dispatch => {
    return axios.get('/category/info')
      .then(res => {
        const { code, data } = res
        if (code === 1) {
          dispatch(updateCategory(data))
        }
      })
  }
}

export const fetchTags = () => {
  return dispatch => {
    return axios.get(`/category`)
      .then(res => {
        const { code, data } = res
        if (code === 0) {
          dispatch(updateTags(data.tags))
        }
      })
  }
}

export const fetchArticlesByArchives = (type = '') => {
  return dispatch => {
    return axios.get(`/archives/${type}`)
      .then(res => {
        const { code, data } = res
        if (code === 0) {
          dispatch(updateArticles(data))
        }
      })
  }
}

export const fetchArticlesByKeyword = (keyword = '') => {
  return dispatch => {
    return axios.get(`/search?keyword=${keyword}`)
      .then(res => {
        const { code, data } = res
        if (code === 0) {
          dispatch(updateArticles(data))
        }
      })
  }
}

export const fetchCurrentArticleContent = id => {
  return dispatch => {
    return axios.get(`/article/${id}`)
      .then(res => {
        const { code, data } = res
        if (code === 0) {
          dispatch(updateArticleContent(data))
        }
      })
  }
}
