export function selectBook(book: Object) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
