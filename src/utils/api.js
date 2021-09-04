const API_URL = 'https://setest-server.herokuapp.com';

const API = {
	tasks : {
		async findOneById(id){
			if(typeof id !== "number")
				throw new Error();
			
			return fetch(API_URL + `/tasks/${id}`)
				.then(response => response.json());
		}
	}
}

export default API;
