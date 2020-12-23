/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:48:07 by ywake             #+#    #+#             */
/*   Updated: 2020/12/23 23:23:18 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

let array = new Array(3);
(async () => {
	if (process.argv.length == 5)
	{
		for (let i = 2; i < 5; i++) {
			array[i-2] = get(process.argv[i]);
		}
		Promise.all(array).then((htmls) => {
			for (let i = 0; i < htmls.length; i++) {
				const html = htmls[i];
				console.log(html);
			}
		});
	}
})();

function get(url) {
	return new Promise((resolve, reject) => {
		let rawData = '';
		try {
			http.get(url, (res) => {
				res.setEncoding("utf-8");
				res.on('data', (chunk) => {
					rawData += chunk;
				});
				res.on('end', () => {
					resolve(rawData);
				});
			});
		} catch (error) {
			reject(error);
		}
	});
}
