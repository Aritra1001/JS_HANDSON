// function removeDuplicate(str,n){
//     var s = new Set();
//     for(let i = 0; i < n; i++){
//         s.add(str[i]);
//     }
//     for(const element of s){
//         console.log(element);
//     }
// }
// var str = "abcadeecfb"
// var n = str.length;
// removeDuplicate(str,n);

// function prCharWithFreq(s)
// {
 
//   var d = new Map();
 
//   s.split('').forEach(element => {
     
//         if(d.has(element))
//         {
//             d.set(element, d.get(element)+1);
//         }
//         else
//             d.set(element, 1);
//   });
 
//   s.split('').forEach(element => {
//     if(d.has(element) && d.get(element)!=0)
//     {
//       console.log( element + d.get(element) + " ");
//       d.set(element, 0);
//     }
//   });
// }

// var s="abcadeecfb";
// prCharWithFreq(s);