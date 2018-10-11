import { combineReducers } from 'redux'

const createReducers = (initialState, handles) => {
  return (state = initialState, actions) => {
    const { type } = actions
    if (handles.hasOwnProperty(type)) {
      return handles[type](state, actions)
    } else {
      return state
    }
  }
}

const articlesState = createReducers([], {
  'UPDATE_ARTICLES': (state, actions) => actions.payload || state
})

const categoryState = createReducers([], {
  'UPDATE_CATEGORY': (state, actions) => actions.payload || state
})

const tagsState = createReducers([], {
  'UPDATE_TAGS': (state, actions) => actions.payload || state
})

const contentState = createReducers([], {
  'UPDATE_ARTICLE_CONTENT': (state, actions) => actions.payload || state
})

export default combineReducers({
  articles: articlesState,
  category: categoryState,
  tags: tagsState,
  content: contentState
})