import Navbar from "../../../components/navbar";
import FooterCTA from "../../../components/footer-cta";
import Footer from "../../../components/footer";
import { getArticle, getAllArticles } from "../../../lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import ShareButtons from "../../../components/share-buttons";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// Add this function to generate all possible paths
export async function generateStaticParams() {
  // Generate paths for all locales
  const locales = ['en', 'es']; // Add all your supported locales
  const paths = [];

  for (const locale of locales) {
    const response = await getAllArticles(locale);
    const localePaths = response.data.map((article) => ({
      slug: article.Slug,
      lang: locale,
      section: 'blog',
    }));
    paths.push(...localePaths);
  }

  return paths;
}

export default async function BlogPost({ params }) {
  console.log("🎯 BlogPost params:", params);

  try {
    // Get locale from the file path structure
    const locale = 'es';  // Since we're in app/es/blog/[slug]/page.js
    console.log("🌍 Using locale:", locale);
    
    const article = await getArticle(params.slug, locale);
    console.log("📑 Retrieved article:", article ? "Found" : "Not found");

    if (!article) {
      console.log("❌ No article found for:", {
        slug: params.slug,
        locale: locale
      });
      return (
        <div className="min-h-screen flex items-center justify-center flex-col">
          <h1 className="text-2xl mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-4">
            This article may have been moved or deleted.
          </p>
          <a href="/es/blog" className="text-blue-500 hover:underline">
            → Browse all articles
          </a>
        </div>
      );
    }

    return (
      <div className="bg-slate-50">
        <Navbar />

        {/* Header Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-[89px] sm:pt-[105px] lg:pt-[176px]">
          {/* Breadcrumb */}
          <div className="flex items-start space-x-2 mb-16 text-slate-400">
            <a href="/en/blog" className="hover:text-blue-600">
              Blog
            </a>
            <ChevronRightIcon className="w-5 h-5 pt-1" />
            <span className="text-blue-950">{article.Title}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left mb-4 leading-tight text-blue-950">
            {article.Title}
          </h1>
          <p className="text-base sm:text-base text-slate-400 text-left mb-4">
            {article.Description}
          </p>

          {/* Categories */}
          {article.Categories && article.Categories.length > 0 && (
            <div className="text-base sm:text-base text-left mb-8 flex flex-wrap gap-2">
              {console.log("Rendering categories:", article.Categories)}
              {article.Categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 rounded-lg text-sm text-blue-600 border border-blue-100 bg-blue-50 font-medium"
                >
                  {category.name || "Unnamed Category"}
                </span>
              ))}
            </div>
          )}

          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-12">
            {article.author?.avatar?.url ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.author.avatar.url}`}
                alt={article.author.username || "Author"}
                width={64}
                height={64}
                className="rounded-full"
              />
            ) : (
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">
                  {(article.author?.username || "A").charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h3 className="text-lg font-medium text-blue-950 mb-0.5">
                {article.author?.username || "Anonymous"}
              </h3>
              <time className="text-sm text-slate-400">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-t border-slate-200 mb-8" />
        </div>

        {/* Featured Image */}
        {article.Image?.url && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${
                article.Image.large || article.Image.url
              }`}
              alt={article.Title}
              width={1000}
              height={563}
              priority
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        )}

        {/* Content Section with Sidebar */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-slate-500">
            {article.Content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-4">
                    {block.children.map((child, childIndex) => {
                      let className = "";
                      if (child.bold) className += "font-bold ";
                      if (child.italic) className += "italic ";
                      if (child.underline) className += "underline ";

                      return (
                        <span key={childIndex} className={className.trim()}>
                          {child.text}
                        </span>
                      );
                    })}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
        <FooterCTA />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("💥 Error in BlogPost:", error);
    throw error;
  }
}
