import { AxiosResponse, AxiosError } from 'axios';
import { Endpoint } from './Endpoint';
import { CompanyDetail, MorningResponse, ProfileMetricResponse } from './morning.types';
import MorningError from './MorningError';

type CompanySearchProps = {
  companyId: string;
};

type GetCompanyMetricProps = {
	companyId: string;
	metricId: string;
};

export default class Compaies extends Endpoint {
	async search(props: CompanySearchProps): Promise<MorningResponse<CompanyDetail>> {
		const { companyId } = props;
		if(!companyId) {
			throw new Error('You must specify a companyId to search');
		}
		const endpoint = `${this.path}/search?companyId=${companyId}`;
		this._logger.debug(`${endpoint}`);
		try {
			const resp: AxiosResponse = await this.client.get(endpoint);
			this._logger.debug(`response status: ${resp.status}`);
			return {
				status: true,
				data: resp.data as CompanyDetail,
			};
		} catch (error) {
			const axiosError = error as AxiosError;
			if(!axiosError.response) {
				throw error;
			}
			throw new MorningError(axiosError.message, axiosError.response?.status, axiosError.response?.data);
		}
	}
	async getMetric(props: GetCompanyMetricProps): Promise<MorningResponse<ProfileMetricResponse>> {
		const { companyId, metricId } = props;
		if(!metricId) {
			throw new Error('You must specify a metricId to load');
		}
		if(!companyId) {
			throw new Error('You must specify an companyId to search');
		}
		const endpoint = `${this.path}/metrics?metricId=${metricId}&companyId=${companyId}`;
		try {
			const resp: AxiosResponse = await this.client.get(endpoint);
			this._logger.debug(`response status: ${resp.status}`);
			return {
				status: true,
				data: resp.data as ProfileMetricResponse,
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
