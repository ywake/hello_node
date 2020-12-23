/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:23:44 by ywake             #+#    #+#             */
/*   Updated: 2020/12/23 18:45:44 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

let num = 0;
if (process.argv.length == 3) {
	try {
		fs.readFile(process.argv[2], (err, file) => {
			for (let i = 0; i < file.length; i++) {
				const char = file[i];
				if (char == 10) {
					num++;
				}
			}
			console.log(num);
		});
	} catch (error) {

	}
}
