import { AxiosResponse, AxiosError } from 'axios';
import { Endpoint } from './Endpoint';
import { MorningResponse, PersonDetail } from './morning.types';
import MorningError from './MorningError';

type PersonSearchProps = {
  email?: string;
  personId?: string;
};

export default class People extends Endpoint {
	async search(props: PersonSearchProps): Promise<MorningResponse<PersonDetail>> {
		const { email, personId } = props;
		if(!email && !personId) {
			throw new Error('You must specify an email or a personId to search');
		}
		const endpoint = `${this.path}/search?${email ? `email=${email}` : ''}${personId ? `personId=${personId}` : ''}`;
		try {
			const resp: AxiosResponse = await this.client.get(endpoint);
			this._logger.debug(`response status: ${resp.status}`);
			return {
				status: true,
				data: resp.data as PersonDetail,
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
