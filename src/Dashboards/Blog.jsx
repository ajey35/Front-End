import Header from "../components/Header";
const Blog = () => {
    const articles = [
        { id: 1, title: '5 Tips to Reduce Food Waste', content: 'Content for article 1...' },
        { id: 2, title: 'How Food Donations Impact Lives', content: 'Content for article 2...' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header title="Blog" subtitle="Read the latest updates and tips" />
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
                <ul className="space-y-6">
                    {articles.map((article) => (
                        <li key={article.id} className="p-4 border rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                            <p className="text-gray-700">{article.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Blog;
