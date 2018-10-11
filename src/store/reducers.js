export const reducers = (state, action) => {
  const { type, payload } = action
  if (!state) {
    state = {
      articles: [],
      category: [],
      tags: [],
      content: null
    }
  }
  switch (type) {
    case 'UPDATE_ARTICLES':
      return {
        ...state,
        articles: payload
      }
    case 'UPDATE_CATEGORY':
    return {
      ...state,
      category: payload
    }
    case 'UPDATE_TAGS':
    return {
      ...state,
      tags: payload
    }
    case 'UPDATE_ARTICLE_CONTENT':
      return {
        ...state,
        content: payload
      }
    default:
      return state
  }  
}
