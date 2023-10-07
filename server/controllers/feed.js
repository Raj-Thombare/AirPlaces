exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        content: "First Post",
        title: "This is the First Post!",
        imageUrl: "images/rohit.jpg",
        creator: {
          name: "Raj Thombare",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {
        name: "Raj Thombare",
      },
      createdAt: new Date(),
    },
  });
};
