import { ADD } from 'actions/exampleActions';

export default function add() {
  if (ADD) {
    return {};
  }
  return null;
}
