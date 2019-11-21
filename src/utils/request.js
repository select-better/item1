

import axios from 'axios'

import { Toast } from 'antd-mobile'

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.create({
	timeout: 1000
})

const request = ({
   url,
   method = 'get',
   headers,
   params,
   data,
}) =>{
	return new Promise( ( resolve,reject ) =>{
		 
		switch (method) {
			case 'POST' || 'post':
				const p = new URLSearchParams();
                  for( var key in data){
					  p.append( key,data[key] )
				  };

				 axios({
					method,
					url,
					headers,
					 data : p,
				 })
				 .then( res => resolve( res ))
				 .catch( err =>reject( err ))

				break;
			case 'PUT' || 'put':
					axios({
						method,
						url,
						headers,
						params
					}).then( res => resolve( res ))
					.catch( err =>reject( err ))
				break;
			case 'DELETE' || 'delete':
					axios({
						method,
						url,
						headers,
						params
					}).then( res => resolve( res ))
					.catch( err =>reject( err ))
				break;
			default:
					axios({
						method,
						url,
						headers,
						params
					}).then( res => resolve( res ))
					.catch( err =>reject( err ))
				break;
		}

         //截击
				// Add a request interceptor
		axios.interceptors.request.use(function (config) {
			// Do something before request is sent
			//请求数据loading
			Toast.loading('Loading...', 1, () => {
				// console.log('Load complete !!!');
			});
			return config;
		}, function (error) {
			// Do something with request error
			return Promise.reject(error);
		});

		// Add a response interceptor
		axios.interceptors.response.use(function (response) {
			// Do something with response data
			return response;
		}, function (error) {
			// Do something with response error
			return Promise.reject(error);
		});

	})
}

export default request 