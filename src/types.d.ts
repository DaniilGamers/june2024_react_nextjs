interface IUser {
    id: number;
    name: string;
    email: string;
}

interface IPost{
    userId: number;
    id: number;
    title: string;
    body: string;
}