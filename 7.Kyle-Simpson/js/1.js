console.log(3.0 == 3);

// Exercise: 1

function addFavouriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName)
    }
}

var favoriteBooks = [];

addFavouriteBook('Great boy');
addFavouriteBook('Hello No');
addFavouriteBook('Yes Great boys')

console.log(favoriteBooks)