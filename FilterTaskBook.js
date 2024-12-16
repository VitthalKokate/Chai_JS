mybooks =[
    {
        title : 'Book1',
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'Book2',
        genre : 'Non-Fiction',
        publish : 1997,
        edition : 2013
    },
    {
        title : 'Book3',
        genre : 'History',
        publish : 1980,
        edition : 2002
    },
    {
        title : 'Book4',
        genre : 'Non-Fiction',
        publish : 2000,
        edition : 2014
    },
    {
        title : 'Book5',
        genre : 'Science',
        publish : 1999,
        edition : 2018
    },

]

NonFictiongenre = mybooks.filter( (bk) => bk.genre == 'Non-Fiction' )
// console.log(NonFictiongenre);

editionGret2000 =mybooks.filter( (bk)=> bk.edition >=2000)
// console.log(editionGret2000);

// console.log(mybooks.filter((bk)=> bk.publish == 1999));

console.log(mybooks.filter((bk)=> bk.genre == 'Non-Fiction' && bk.edition == 2014));



