export default interface Post {
    id: number;
    title: string;
    description: string;
    slug: string;
    image: string;
    tag: string;
    author: Object;
    createdAt: Object;
}