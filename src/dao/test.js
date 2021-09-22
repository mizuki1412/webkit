import {request} from '../../lib/request';

export async function BoxList(){
	const {data} = await request('/rest/box/list')
	return data
}
