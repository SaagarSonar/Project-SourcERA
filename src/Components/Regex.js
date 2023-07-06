export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+[.com]$'
 );

 export const validPassword = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$');

 export const validName = new RegExp('\[a-zA-Z a-zA-Z]$');
 export const validMobile = new RegExp('\[0-9]{10}$');