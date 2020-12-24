/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 22:20:09 by ywake             #+#    #+#             */
/*   Updated: 2020/12/25 02:53:12 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");
const urlParser = require("url");

const host = "127.0.0.1"

const server = http.createServer((req, res) => {
	const Response = {
		"200": (msg) => {
			res.writeHead(200, {'Content-Type': 'text/json'});
			res.end(msg);
		},
		"404": () => {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end("404 Not Found\n");
		}
	}

	let url = urlParser.parse(req.url);
	if (req.method === "GET") {
		// console.log(url);
		switch (url.pathname) {
			case "/api/parsetime":
				Response["200"](parseTime(url.query));
				break;
			case "/api/unixtime":
				Response["200"](unixTime(url.query));
				break;
			default:
				Response["404"]();
				break;
		}
	}
}).on('error', (err) => {
	console.error(err.message);
});

if (process.argv.length == 3)
{
	const port = process.argv[2];
	try {
		server.listen(port, host);
	} catch (error) {
		console.error(error.message);
	}
}

function parseQuery(query) {
	let params = query.split('&');
	for (let i = 0; i < params.length; i++) {
		params[i] = params[i].split('=');
	}
	// console.log(params);
	return params;
}

function parseTime(query) {
	let params = parseQuery(query);
	let msg = "";
	for (const [key, value] of params) {
		switch (key) {
			case "iso":
				msg = parseIso(value);
				break;
			default:
				break;
		}
	}
	return msg;
}

function parseIso(isoString) {
	let time = new Date(isoString);
	let resObj = {
		"hour": time.getHours(),
		"minute": time.getMinutes(),
		"second": time.getSeconds()
	};
	try {
		return JSON.stringify(resObj)+"\n";
	} catch (error) {
		console.error(error.message);
	}
}

function unixTime(query) {
	let params = parseQuery(query);
	let msg = "";
	for (const [key, value] of params) {
		switch (key) {
			case "iso":
				try {
					msg = JSON.stringify({
						"unixtime": new Date(value).getTime()
					})+"\n";
				} catch (error) {
					console.error(error.message);
				}
				break;
			default:
				break;
		}
	}
	return msg;
}
