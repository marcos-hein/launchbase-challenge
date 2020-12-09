const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

//  Paginação
// totalPages = 20
// selctedPage = 13
// [1, 2, ...,12, 13, 14, ..., 19, 20]

let totalPages = 10,
    selectedPage = 5,
    pages = [],
    oldPage

if (totalPages > 7) {
    for (let currentPage = 0; currentPage <= totalPages; currentPage++) {

        const firstAndLastPages = currentPage == 1 || currentPage == totalPages
        const secondAndPenultimate = currentPage == 2 || currentPage == totalPages - 1
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 1
        const pagesAfterSelectedPage = currentPage <= selectedPage + 1
    
        if (firstAndLastPages || secondAndPenultimate || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }
    
            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }
    
            pages.push(currentPage)
    
            oldPage = currentPage
        }
    }
} else {
    for (let currentPage = 0; currentPage <= totalPages; currentPage++) {
        pages.push(currentPage)
    }
}


console.log(pages)