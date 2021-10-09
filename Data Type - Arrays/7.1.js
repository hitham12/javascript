const book = {
    title: "438 Days",
    anotherTitle: " An Extraordinary True Story of Survival at Sea",
    writtenby:" Jonathan Franklin",
    Publicationdate: "2016" ,
}
function bookdec(book){
return `The book ${book.title} was written by${book.writtenby} in
the year ${book.Publicationdate}`
}
console.log(bookdec(book));