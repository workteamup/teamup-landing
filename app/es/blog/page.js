"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { useEffect, useState } from "react";
import { getArticles } from "../../lib/api";

const BlogPage = () => {
  const t = useTranslations();
  const [articles, setArticles] = useState([]); // Initialize with empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data || []); // Ensure we always set an array
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Error loading articles. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {t("Blog.title")}
        </h1>
        <p className="mt-4 text-xl text-gray-500">{t("Blog.description")}</p>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {article.attributes.image?.data && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.image.data.attributes.url}`}
                  alt={article.attributes.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.attributes.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {article.attributes.description}
                </p>
                <a
                  href={`/blog/${article.attributes.slug}`}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  {t("Blog.readMore")} →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
