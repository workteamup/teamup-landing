"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { useEffect, useState } from "react";
import { getAllArticles } from "../../lib/api";
import Navbar from "../../components/navbar";
import FooterCTA from "../../components/footer-cta";
import Footer from "../../components/footer";
import Image from "next/image";
import CTA from "../../components/cta";

const BlogPage = () => {
  const t = useTranslations();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getAllArticles();
        if (response?.data) {
          setArticles(response.data);
        } else {
          setArticles([]);
          console.warn("Received invalid articles data format:", response);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Add this skeleton loader component
  const ArticleSkeleton = () => (
    <>
      {/* Featured Article Skeleton */}
      <div className="mb-4">
        <div className="grid md:grid-cols-6 gap-8 p-4 border border-slate-200 rounded-3xl shadow-xl">
          <div className="relative h-[400px] md:col-span-3 overflow-hidden rounded-2xl bg-slate-200 animate-pulse" />
          <div className="flex flex-col justify-center md:col-span-3">
            <div className="flex gap-2 mb-4">
              <div className="w-20 h-6 bg-slate-200 rounded-lg animate-pulse" />
              <div className="w-20 h-6 bg-slate-200 rounded-lg animate-pulse" />
            </div>
            <div className="h-8 bg-slate-200 rounded mb-4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Regular Articles Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-5 border border-slate-200 rounded-3xl shadow-xl bg-white"
          >
            <div className="h-52 mb-4 rounded-xl bg-slate-200 animate-pulse" />
            <div className="mb-2">
              <div className="flex gap-2 mb-3">
                <div className="w-16 h-5 bg-slate-200 rounded-lg animate-pulse" />
                <div className="w-16 h-5 bg-slate-200 rounded-lg animate-pulse" />
              </div>
              <div className="h-6 bg-slate-200 rounded mb-3 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[73px] sm:pt-[81px] lg:pt-[128px] pb-24 mb-24">
        {/* Add header section */}
        <div className="text-center mb-24 mt-24">
          <h1 className="text-5xl font-semibold text-blue-950 mb-4">
            {t("Blog.welcome", "Welcome to Team Up! Blog")}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t(
              "Blog.description",
              "Discover the latest news, remote work insights, and exciting Team Up! activities to enhance your collaborative experience."
            )}
          </p>
        </div>
        <div className="h-px bg-slate-200 mb-24 max-w-2xl mx-auto" />

        {loading ? (
          <ArticleSkeleton />
        ) : articles.length > 0 ? (
          <>
            {/* Featured Article */}
            <div className="mb-4">
              <a
                href={`/en/blog/${articles[0].Slug}`}
                className="grid md:grid-cols-6 gap-8 group p-4 border border-slate-200 rounded-3xl shadow-xl "
              >
                <div className="relative h-[400px] md:col-span-3 overflow-hidden rounded-2xl">
                  {articles[0].Image?.url && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${
                        articles[0].Image.large || articles[0].Image.url
                      }`}
                      alt={articles[0].Title}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center md:col-span-3">
                  {articles[0].Categories?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {articles[0].Categories.map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-3 py-1 rounded-lg text-sm text-blue-600 border border-blue-100 bg-blue-50 font-medium"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 mb-4 leading-tight">
                    {articles[0].Title}
                  </h2>
                  <p className="text-lg text-slate-500 mb-6 max-w-2xl line-clamp-3">
                    {articles[0].Description}
                  </p>
                  <div className="flex items-center text-slate-400 text-sm mb-4">
                    <span>
                      {new Date(articles[0].Date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {articles[0].author && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{articles[0].author.username}</span>
                      </>
                    )}
                  </div>
                  <span className="text-blue-500 font-medium">
                    {t("Blog.readMore")} →
                  </span>
                </div>
              </a>
            </div>

            {/* Regular Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(1).map((article) => (
                <a
                  key={article.id}
                  href={`/en/blog/${article.Slug}`}
                  className="group p-5 border border-slate-200 rounded-3xl shadow-xl bg-white"
                >
                  {article.Image?.url && (
                    <div className="relative h-52 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.Image.url}`}
                        alt={article.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="mb-2">
                    {article.Categories?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.Categories.map((category) => (
                          <span
                            key={category.id}
                            className="inline-flex items-center px-2 py-1 rounded-lg text-xs text-blue-600 border border-blue-100 bg-blue-50 font-medium"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-lg md:text-2xl font-semibold text-slate-950 mb-3">
                      {article.Title}
                    </h2>
                    <p className="text-slate-400 mb-4 line-clamp-2 text-sm">
                      {article.Description}
                    </p>
                    <span className="text-blue-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      {t("Blog.readMore")} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-slate-400">No articles found.</p>
        )}
      </div>
      <CTA variant="dark" />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default BlogPage;
