/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:06:57 by ywake             #+#    #+#             */
/*   Updated: 2020/12/23 18:21:29 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let total = 0;
for (let i = 0; i < process.argv.length; i++) {
	const arg = process.argv[i];
	if (i > 1) {
		total += parseInt(arg);
	}
}
console.log(total);
