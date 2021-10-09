const book1 = {
    name: "The lord of the ring",
    author: "Allen",
    year: 1954,
}
const book2 = {
    name: "game of thrones",
    author: "samer",
    year: 2011,
}
const bookutils = {

    getFirstPublished: function(B1, B2) {
        if (B1.year > B2.year) {
            return B2.year

        } else { return B1.year }
    },
    setNewEdition: function(book, editionyear) {
        book.editionyear = editionyear;

    },
    setLanguage: function(book, lang) {
        book.language = lang;
    },
    setTranslation: function(book, Translator, language) {
        book.translation = { translator: Translator, language: language }

    },
    setPublisher: function(book, name, location) {
        book.publisher = { name: name, location: location }
    },
    isSamePublisher: function(b1, b2) {
        if (b1.publisher.name === b2.publisher.name && b1.publisher.location === b1.publisher.location) {
            return true;

        } else return false;
    }
}
bookutils.setPublisher(book1, "wajde", "aom al fa7m");
bookutils.setPublisher(book2, "wajde", "aom al fa7m");
console.log(bookutils.isSamePublisher(book1, book2));