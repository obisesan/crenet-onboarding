
export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
//   console.log($axios)
	$axios.onRequest(config => {
        config.params = {apikey :'44ea59e892f02b51121f7bb1233a140d'}
        // console.log(config)
    })
}