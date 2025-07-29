import { GiVineFlower } from "react-icons/gi";

const Blogs = () => {
  const blogPosts = [
    {
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_TileImage_ReceptionOutfits_D-M_14-09-2023-09-05?$WT_Blogs_Tiles_D%26M$",
      title: "The Art of Choosing Your Wedding Reception Outfit",
      preview:
        "Choosing the perfect outfit for your wedding reception is an art. It should reflect your personality and match the occasion’s grandeur.",
    },
    {
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_WeddingRituals_D_revised_11-08-2023-12-37?$WT_Blogs_Tiles_D%26M$",
      title: "Five Unique Wedding Rituals in India",
      preview:
        "India is known for its rich traditions. Here are five rare and meaningful wedding rituals that highlight the country's cultural diversity.",
    },
    {
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog%5FTile%5FWeddingTrends%5FDM%5F07%2D11%2D2023%2D05%2D08?$WT%5FBlogs%5FTiles%5FD%26M$",
      title: "The Biggest Wedding Trends of 2024",
      preview:
        "From eco-friendly celebrations to vibrant pastel themes, discover the hottest wedding trends that are set to define 2024.",
    },
  ];

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",
          letterSpacing: "3px",
          marginTop: "30px",
        }}
      >
        <GiVineFlower /> From The{" "}
        <span style={{ color: "#b45f06" }}>Blog</span> <GiVineFlower />
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              width: "400px",
              textAlign: "left",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ padding: "15px" }}>
              <p style={{ fontWeight: "bold", fontSize: "16px" }}>{post.title}</p>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                {post.preview}
              </p>
              <a href="#" style={{ color: "red", fontSize: "14px" }}>
                Read the story &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
