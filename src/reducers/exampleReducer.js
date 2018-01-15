import { ADD } from 'actions/exampleActions';

export default function exampleReducer(state, action) {
  if (action.type === ADD) {
    return {};
  }
  return null;
}
