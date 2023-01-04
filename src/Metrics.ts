import { Endpoint } from './Endpoint';
import { ProfilePayload } from './morning.types';

export default class Metrics extends Endpoint {
	increment(metricId: string, value: number, profile?: ProfilePayload) {
		const endpoint = `${this.path}/${metricId}`;
		const payload = {
			method: 'increment',
			value,
			...(profile || {})
		};
		return this.client.post(endpoint, payload)
	}

	decrement(metricId: string, value: number, profile?: ProfilePayload) {
		const endpoint = `${this.path}/${metricId}`;
		const payload = {
			method: 'decrement',
			value,
			...(profile || {})
		};
		return this.client.post(endpoint, payload)
	}

	set(metricId: string, value: number, profile?: ProfilePayload) {
		const endpoint = `${this.path}/${metricId}`;
		const payload = {
			method: 'set',
			value,
			...(profile || {})
		};
		return this.client.post(endpoint, payload)
	}
}
