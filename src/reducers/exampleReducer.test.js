import exampleReducer from './exampleReducer';

describe('exampleReducer', () => {
  it('should return null when action type is not defined', () => {
    expect(exampleReducer({}, {})).toBeNull();
  });
});
