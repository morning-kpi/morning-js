import { AxiosResponse } from 'axios';
import { Endpoint } from './Endpoint';
import { MorningResponse, PersonDetail } from './morning.types';

type CompanySearchProps = {
  companyId: string;
};


export default class Compaies extends Endpoint {
	async search(props: CompanySearchProps): Promise<MorningResponse<PersonDetail>> {
		const { companyId } = props;
		if(!companyId) {
			throw new Error('You must specify a companyId to search');
		}
		const endpoint = `${this.path}/search?companyId=${companyId}`;
		this._logger.debug(`${endpoint}`);
		const resp: AxiosResponse = await this.client.get(endpoint);
		this._logger.debug(`response status: ${resp.status}`);
		return resp.data;
	}
}
