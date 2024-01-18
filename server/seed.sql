-- CATEGORIES
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)

-- POSTS
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  likes INTEGER NOT NULL,
  category_id INTEGER REFERENCES categories(id)
)

-- CATEGORIES CONTENT
INSERT INTO categories(name) VALUES
('Technology'),
('Travel'),
('Food'),
('Lifestyle')


-- POSTS CONTENT
INSERT INTO posts(title, content, likes, category_id) VALUES('Revolutionizing AI in Healthcare','Explore the latest advancements in artificial intelligence applied to healthcare, from predictive diagnostics to personalized treatment plans, paving the way for a healthier future.',0,1),('The Future of Quantum Computing','Dive into the realm of quantum computing, unraveling its potential to revolutionize computation speed and solve complex problems, ushering in a new era of technological possibilities.',0,1),('Hidden Gems of Southeast Asia','Embark on a virtual journey through the enchanting landscapes and cultural treasures of Southeast Asia, discovering lesser-known destinations that promise a truly immersive travel experience.',0,2),('Adventure Seekers Guide to Patagonia"','Experience the thrill of Patagonias rugged beauty and diverse landscapes as we guide you through the ultimate adventure destinations, from towering peaks to pristine wilderness.',0,2),('Gastronomic Delights: Fusion Cuisine','Indulge your taste buds in a culinary exploration of fusion cuisine, where diverse flavors and culinary traditions blend harmoniously to create mouthwatering dishes that transcend cultural boundaries.',0,3),('Artisanal Chocolate Tasting Experience','Delve into the world of artisanal chocolates, savoring the rich and nuanced flavors crafted by skilled chocolatiers, as we take you on a delightful journey of chocolate appreciation.',0,3),('Mindfulness in Daily Life','Discover the transformative power of mindfulness as we explore simple yet effective practices to integrate mindfulness into your daily routine, fostering mental clarity and emotional well-being.',0,4),('Minimalist Living: Declutter Your Space','Embark on a minimalist lifestyle journey, learning practical tips to declutter your living space and simplify your life, promoting a sense of calm and focus in the midst of modern chaos.',0,4)
