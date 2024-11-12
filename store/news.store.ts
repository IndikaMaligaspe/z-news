import { faker } from "@faker-js/faker/.";

export const trendingCatergories = ["Biography", "Comic", "Mystery", "Children's Literature", "Detective"]


console.log({ trendingCatergories: trendingCatergories })

export const newsSummary: NewsSummary[] = [
    {
        id: 0,
        title: faker.book.title(),
        image: faker.image.urlLoremFlickr({
            width: 300,
            height: 300,
            category: "science",
        }),
        shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        date: "2024-09-07",
        topic: trendingCatergories[0],
        source: "bbc.com",
    },
    {
        id: 1,
        title: faker.book.title(),
        image: faker.image.urlLoremFlickr({
            width: 300,
            height: 300,
            category: "science",
        }),
        shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        date: "2024-09-07",
        topic: trendingCatergories[0],
        source: "bbc.com",
    },
    {
        id: 2,
        title: faker.book.title(),
        image: faker.image.urlLoremFlickr({
            width: 300,
            height: 300,
            category: "fasion",
        }),
        shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        date: "2024-09-07",
        topic: trendingCatergories[0],
        source: "bbc.com",
    },
    {
        id: 3,
        title: faker.book.title(),
        image: faker.image.urlLoremFlickr({
            width: 300,
            height: 300,
            category: "fasion",
        }),
        shortDescription:
            faker.definitions.book.publisher.join(),
        description:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        date: "2024-09-07",
        topic: trendingCatergories[1],
        source: "bbc.com",
    },
];