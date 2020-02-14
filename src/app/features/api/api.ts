import { IApiRequestOptions } from './api.models';

export async function get<T>(url: string, options?: IApiRequestOptions): Promise<T> {
	const res = await fetch(url, {
		method: 'get',
	});
	return res.json();
}
