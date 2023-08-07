import canIterate from '../app';

it('canIterate should work', () => {
  expect(canIterate(new Map())).toBeTruthy(); // true
  expect(canIterate(new Set())).toBeTruthy(); // true
  expect(canIterate(null)).toBeFalsy(); // false
  expect(canIterate(10)).toBeFalsy(); // false
  expect(canIterate('Netology')).toBeTruthy();
});
