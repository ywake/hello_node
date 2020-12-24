/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:48:07 by ywake             #+#    #+#             */
/*   Updated: 2020/12/24 22:01:36 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

if (process.argv.length == 3)
{
	try {
		http.get(process.argv[2], (res) => {
			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk;
			});
			res.on('end', () => {
				console.log(rawData);
			});
			res.on('error', (err) => {
				console.error(err.message);
			});
		}).on('error', (err) => {
			console.error(err.message);
		});
	} catch (error) {
		console.error(error.message);
	}
}
