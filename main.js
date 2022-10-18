const str = `
010-9949-0844
098sung@hanmai.net
http://www.omdbapi.com/?apikey=[yourkey]&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/(?<=@).{1,}/g))