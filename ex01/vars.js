/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   vars.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywake <ywake@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:02:04 by ywake             #+#    #+#             */
/*   Updated: 2020/12/23 22:45:33 by ywake            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let str = "42";
let num = 42;
let obj = new Object(42);
let empty = new Object();
let bool = true;
let undef;

console.log(str, "is a", typeof str + ".");
console.log(num, "is a", typeof num + ".");
console.log(`${obj} is an ${typeof obj}.`);
console.log(`${empty} is an ${typeof empty}.`);
console.log(bool, "is a", typeof bool + ".");
console.log(undef, "is an", typeof undef + ".");
