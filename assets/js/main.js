// ********************
// Delete Books
// ********************
const deleteLinks = document.querySelectorAll('.delete-book');

Array.from(deleteLinks).forEach(element => {
    element.addEventListener('click', deleteBook)
})

function deleteBook() {
    const bookID;
    try {
        fetch('deleteBooks', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName,
            })
        })
    }
    catch (err) {
        console.error(err)
    }
}


// ********************
// Update Books
// ********************
const updateLinks = document.querySelectorAll('.update-book');

Array.from(updateLinks).forEach(element => {
    element.addEventListener('click', updateBook)
})

function updateBook() {
    try {

    }
    catch (err) {
        console.error(err)

    }
}
