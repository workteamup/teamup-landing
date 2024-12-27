// lib/api.js
const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

console.log("API URL:", process.env.NEXT_PUBLIC_STRAPI_API_URL);
console.log("API Token:", process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

export async function fetchAPI(endpoint) {
  try {
    const response = await fetch(`${API_URL}/api${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw error;
  }
}

export async function getAllArticles(locale = 'en') {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?locale=${locale}&populate[0]=Image&populate[1]=author&populate[2]=categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data);
    console.log("DEBUG - All articles from API:", data); // Add this line
    console.log(
      "getAllArticles response:",
      data.data.map((article) => article.Slug)
    );

    return {
      data: data.data.map((article) => ({
        id: article.id,
        Title: article.Title,
        Slug: article.Slug,
        Description: article.Description,
        Date: article.Date,
        Content: article.Content,
        documentId: article.documentId,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
        publishedAt: article.publishedAt,
        author: article.author,
        Image: {
          url: article.Image?.url || null,
          width: article.Image?.width || null,
          height: article.Image?.height || null,
          formats: article.Image?.formats || null,
          small: article.Image?.formats?.small?.url || null,
          medium: article.Image?.formats?.medium?.url || null,
          large: article.Image?.formats?.large?.url || null,
          thumbnail: article.Image?.formats?.thumbnail?.url || null,
        },
        Categories:
          article.categories?.map((cat) => ({
            id: cat.id,
            name: cat.Name,
            slug: cat.Slug,
            description: cat.Description,
          })) || [],
      })),
    };
  } catch (error) {
    console.error("Error in getAllArticles:", error);
    throw error;
  }
}

export async function getArticle(slug, locale = 'en') {
  try {
    console.log("🚀 Fetching article with slug:", slug, "locale:", locale);

    if (!slug) {
      console.error("No slug provided to getArticle");
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?locale=${locale}&filters[Slug][$eq]=${encodeURIComponent(
        slug
      )}&populate[0]=author.avatar&populate[1]=categories`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`API response not ok: ${response.status}`);
      return null;
    }

    const data = await response.json();
    //console.log("📊 Raw API Response:", data);

    if (!data.data || data.data.length === 0) {
      console.log("❌ No article found for slug:", slug);
      return null;
    }

    const article = data.data[0];
    console.log("✅ Found article with slug:", article.Slug);
    console.log("📂 Raw Categories data:", article.categories);
    console.log("Avatar:", article.author?.avatar);

    return {
      id: article.id,
      Title: article.Title,
      Slug: article.Slug,
      Description: article.Description,
      Date: article.Date,
      Content: article.Content,
      Categories:
        article.categories?.map((cat) => ({
          id: cat.id,
          name: cat.Name,
          slug: cat.Slug,
          description: cat.Description,
        })) || [],
      documentId: article.documentId,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      author: {
        username: article.author?.username || null,
        email: article.author?.email || null,
        id: article.author?.id || null,
        avatar: article.author?.avatar || null,
      },
      Image: {
        url: article.Image?.url || null,
        width: article.Image?.width || null,
        height: article.Image?.height || null,
        formats: article.Image?.formats || null,
        small: article.Image?.formats?.small?.url || null,
        medium: article.Image?.formats?.medium?.url || null,
        large: article.Image?.formats?.large?.url || null,
        thumbnail: article.Image?.formats?.thumbnail?.url || null,
      },
    };
  } catch (error) {
    console.error("💥 Error in getArticle:", error);
    return null;
  }
}

export async function getCategories() {
  const data = await fetchAPI("/categories");
  return data.data;
}

/*
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.Slug,
  }));
}*/
