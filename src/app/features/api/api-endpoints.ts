export function apiEndpoints() {
	return {
		task1() {
			const host = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:7000/';
			return {
				person: (input: string): string => {
					return host + `person/${input}`;
				},

				facility: (person: string): string => {
					return host + `facility/${person}`;
				},

				exposure: (facility: string): string => {
					return host + `exposure/${facility}`;
				}
			};
		}
	};
}
