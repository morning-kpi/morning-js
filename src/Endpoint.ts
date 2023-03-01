import {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import { MorningResponse } from './morning.types';
import { Logger } from 'sitka';
import MorningError from './MorningError';

export abstract class Endpoint {
	client: AxiosInstance;
	path: string;
	_logger: Logger;
	constructor(_client: AxiosInstance, _path: string) {
		this.client = _client;
		this.path = _path;
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}
	async get(id: string): Promise<MorningResponse<unknown>> {
		const endpoint = `${this.path}/${encodeURIComponent(id)}`;
		this._logger.debug(`${endpoint}`);
		try {
			const resp: AxiosResponse = await this.client.get(endpoint);
			this._logger.debug(`response status: ${resp.status}`);
			return {
				status: true,
				data: resp.data,
			};
		} catch (error) {
			const axiosError = error as AxiosError;
			if(!axiosError.response) {
				throw error;
			}
			throw new MorningError(axiosError.message, axiosError.response?.status, axiosError.response?.data);
		}
	}
}
