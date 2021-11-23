import { ApolloServer, gql } from "apollo-server";
import createServer from "./create-server";

describe("test resolver", () => {
    let server: ApolloServer;

    beforeAll(async () => {
        server = await createServer();
    });

    describe("queries", () => {
        it("get all books", async () => {
            const GET_BOOKS = gql`
                query Query {
                    books {
                        id
                        title
                        author
                    }
                }
            `;
            const result = await server.executeOperation({
                query: GET_BOOKS,
            });
            expect(result.errors).toBeUndefined();
            expect(result.data?.books.length).toBe(2);
        });
    });

    describe("queries", () => {
        it("get one book by id", async () => {
            const GET_BOOK = gql`
                query Query($id: ID!) {
                    singleBook(id: $id) {
                        id
                        title
                        author
                    }
                }
            `;

            const result = await server.executeOperation({
                query: GET_BOOK,
                variables: {
                    id: 1,
                },
            });

            expect(result.errors).toBeUndefined();
            expect(result.data?.singleBook).toEqual(
                expect.objectContaining({ id: "1" })
            );
        });
    });

    describe("mutations", () => {
        describe("add book", () => {
            const ADD_BOOK = gql`
                mutation Mutation($title: String!, $author: String!) {
                    addBook(title: $title, author: $author) {
                        id
                        title
                        author
                    }
                }
            `;

            it("fails if required variables are missing", async () => {
                const result = await server.executeOperation({
                    query: ADD_BOOK,
                    variables: {},
                });

                expect(result.errors).not.toBeUndefined();
                expect(result.errors?.length).toBe(2);
            });

            it("succeeds with required variables", async () => {
                const result = await server.executeOperation({
                    query: ADD_BOOK,
                    variables: {
                        title: "Dune",
                        author: "Frank Herbert",
                    },
                });

                expect(result.errors).toBeUndefined();
                expect(result.data?.addBook.title).toBe("Dune");
                expect(result.data?.addBook.author).toBe("Frank Herbert");
            });
        });

        describe("edit a book", () => {
            const EDIT_BOOK = gql`
                mutation Mutation($id: ID!, $title: String!, $author: String!) {
                    editBook(id: $id, title: $title, author: $author) {
                        id
                        title
                        author
                    }
                }
            `;

            it("fails if required variables are missing", async () => {
                const result = await server.executeOperation({
                    query: EDIT_BOOK,
                    variables: {},
                });

                expect(result.errors).not.toBeUndefined();
                console.log(result.errors);
                expect(result.errors?.length).toBe(3);
            });

            it("succeeds with required variables", async () => {
                const result = await server.executeOperation({
                    query: EDIT_BOOK,
                    variables: {
                        id: "1",
                        title: "Dune",
                        author: "Frank Herbert",
                    },
                });

                expect(result.errors).toBeUndefined();
                expect(result.data?.editBook.id).toBe("1");
                expect(result.data?.editBook.title).toBe("Dune");
                expect(result.data?.editBook.author).toBe("Frank Herbert");
            });
        });
    });
});
