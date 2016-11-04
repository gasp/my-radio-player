import configureStore from './configureStore';

it('checks devtool', () => {
  expect(true).toEqual(true);
  expect(typeof configureStore).toEqual('function');
});
