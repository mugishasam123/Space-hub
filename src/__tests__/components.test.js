import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../components/redux/rockets/store/configureStore';
import Rocket from '../components/Rocket';
import RocketsList from '../components/Rockets';

it('Test if Rocket renders correctly', () => {
  const item = {
    description: 'description',
    image: 'https://test.com',
    name: 'Rocket',
    id: 1,
    reserved: false,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket rocket={item} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Rockets List renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
