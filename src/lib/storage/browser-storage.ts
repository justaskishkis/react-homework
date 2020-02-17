export function browserStorage() {
	return {
		set(itemName: string, value: unknown): void {
			const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
			window.localStorage.setItem(itemName, valueToStore);
		},

		get<T = void>(
			itemName: string & (T extends void ? 'Specify return type of the function call' : string)
		): T | null {
			const item = window.localStorage.getItem(itemName);

			if (item === null || item === 'undefined') {
				return null;
			}

			try {
				return JSON.parse(item) as T;
			} catch (_) {
				// localStorage.getItem() returns string always, but in this case we want to say that we know it is NOT string
				return (item as unknown) as T;
			}
		},

		remove(itemName: string): void {
			window.localStorage.removeItem(itemName);
		},

		clear(): void {
			window.localStorage.clear();
		},
	};
}
