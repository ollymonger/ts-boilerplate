import { hello } from './hello';

describe('hello world tests', () => {
	test('returns hello world', () => {
		const expected = 'hello world';
		const result = hello();

		expect(result).toEqual(expected);
	});
});
