import { Endpoint } from './Endpoint';
import { MorningResponse, PersonDetail } from './morning.types';

type PersonSearchProps = {
  email?: string;
  personId: string;
};


export default class People extends Endpoint {
	async search(props: PersonSearchProps): Promise<MorningResponse<PersonDetail>> {
		const { email, personId } = props;
		if(!email && !personId) {
			throw new Error('You must specify an email or a personId to search');
		}
		const endpoint = `${this.path}/search?${email ? `email=${email}` : ''}${personId ? `personId=${personId}` : ''}`;
		const { data } = await this.client.get(endpoint);
		return data;
	}
}
