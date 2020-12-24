/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:48:07 by ywake             #+#    #+#             */
/*   Updated: 2020/12/24 22:02:52 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

if (process.argv.length == 5)
{
	let array = new Array();
	(async () => {
		for (let i = 2; i < 5; i++) {
			array.push(get(process.argv[i]));
		}
		Promise.all(array).then((htmls) => {
			for (let i = 0; i < htmls.length; i++) {
				const html = htmls[i];
				console.log(html);
			}
		}).catch((err) => {
			console.error(err.message);
		});
	})();
}

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
				res.on('error', (err) => {
					reject(err);
				});
			}).on('error', (err) => {
				reject(err);
			});
		} catch (error) {
			reject(err);
		}
	});
}
