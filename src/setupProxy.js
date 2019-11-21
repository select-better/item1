

const proxy = require( 'http-proxy-middleware' )

module.exports = function (app) {
	app.use(
		'/ajax/movieOnInfoList',
		proxy({
			target: 'http://m.maoyan.com/',
			changeOrigin: true
		})
	)
	app.use(
		'/index.php',
		proxy({
			target: 'http://www.qinqin.net/',
			changeOrigin: true
		})
	)
}