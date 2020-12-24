/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 02:34:26 by ywake             #+#    #+#             */
/*   Updated: 2020/12/24 22:17:21 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require("net");

const server = net.createServer((conn) => {
	conn.on('data', (data) => {
		conn.write(formatDate(new Date())+"\n");
		conn.end();
	});
	conn.on('close', () => {
		// console.log("closed connection");
	});
	conn.on("error", (err) => {
		console.log(err.message);
	});
}).on('error', (err) => {
	console.error(err.message);
});

if (process.argv.length == 3)
{
	const port = parseInt(process.argv[2]);
	try {
		server.listen(port);
	} catch (error) {
		console.error("trycatch", error.message);
	}
}

function formatDate(now) {
	let YYYY = now.getFullYear();
	let MM = ("0"+(now.getMonth()+1)).slice(-2);
	let DD = ("0"+(now.getDate())).slice(-2);
	let hh = ("0"+(now.getHours())).slice(-2);
	let mm = ("0"+(now.getMinutes())).slice(-2);
	return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
}
