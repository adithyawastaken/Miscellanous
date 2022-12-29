const ok = ['ok' , 'brok' , 'bok']
ok.map(e => {
  return e.charAt(0).toUpperCase()+e.slice(1)
})
let k = ['Ok is not', 'ok is maybe', 'oK is idk']
k.map(e=>{
 return e.replace(/ok/ig , 'brok')
})
let word = '  okbro  '
word.trim()

const array = [1 , 5 , 2 , 7 , 3 , 8 , 3]
array.sort((a,b)=>{
  return a-b;
})
