class MorningError extends Error {
	status: number;
	body: unknown;
	constructor(message: string, status: number, body: unknown) {
		super(message);
		this.name = 'MorningError';
		this.status = status;
		this.body = body;
	}
}

export default MorningError;
