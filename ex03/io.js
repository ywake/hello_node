/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:23:44 by ywake             #+#    #+#             */
/*   Updated: 2020/12/25 19:26:27 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

let num = 0;
if (process.argv.length == 3) {
	try {
		let file = fs.readFileSync(process.argv[2], "utf-8");
		for (let i = 0; i < file.length; i++) {
			if (file[i] == '\n') {
				num++;
			}
		}
		console.log(num);
	} catch (error) {
		console.log(error.message);
	}
}
