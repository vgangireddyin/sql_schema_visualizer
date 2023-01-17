const booksTable = {
  name: "books",
  columns: [
    {
      name: "id",
      description: "Unique identifier of the book.",
      handleType: "source",
      key: true,
      type: "integer"
    },
    {
      name: "name",
      description: "Name of the book.",
      type: "text"
    },
    {
      name: "slug",
      description: "Identifer of a book used in URLs. For example https://www.bindle.com/books/final-future. Usually generated from book’s name.",
      type: "text"
    },
    {
      name: "genre",
      description: "Book’s genre.",
      type: "text"
    },
    {
      name: "pages_count",
      description: "Number of pages in the book.",
      type: "integer"
    },
  ]
};

export default booksTable;
