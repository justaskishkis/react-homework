module.exports = {
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
	moduleNameMapper: {
		'^.+\\.(css)$': 'identity-obj-proxy'
	}
}
