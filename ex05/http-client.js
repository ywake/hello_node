/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:48:07 by ywake             #+#    #+#             */
/*   Updated: 2020/12/23 19:12:33 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

if (process.argv.length == 3)
{
	try {
		http.get(process.argv[2], (res) => {
			res.setEncoding("utf-8");
			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk;
			});
			res.on('end', () => {
				console.log(rawData);
			});
		});
	} catch (error) {

	}
}
