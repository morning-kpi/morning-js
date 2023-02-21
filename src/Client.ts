import axios, {AxiosInstance} from 'axios';
import Metrics from './Metrics';
import People from './People';
import Companies from './Companies';

export default class Client {
	client: AxiosInstance;
	apiKey: string;
	metrics: Metrics;
	people: People;
	companies: Companies;
	constructor(_apiKey: string) {
		this.client = axios.create({
			baseURL: process.env.MORNING_API_ENDPOINT || 'https://api.morning.so/v3',
		});
		this.apiKey = _apiKey;
		this.client.defaults.headers.common.accept = 'application/json';
		this.client.defaults.headers.common.Authorization = `Bearer ${this.apiKey}`;
		this.metrics = new Metrics(this.client, '/metrics');
		this.people = new People(this.client, '/people');
		this.companies = new Companies(this.client, '/companies');
	}
}
