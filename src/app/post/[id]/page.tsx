type PostPageProps = {
    params: { id: string };
};

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    return <div>Post Detail Page — ID: {id}</div>;
}