import configureStore from './redux/configureStore'

module.exports = function render(initialState) {
  const store = configureStore(initialState)

  const preloadedState = store.getState()

  return {preloadedState};
}
