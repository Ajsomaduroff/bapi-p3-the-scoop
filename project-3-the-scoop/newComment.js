let database = {
  users: {},
  articles: {},
  nextArticleId: 1,
  comments: {},
  nextCommentId: 1
};

// const newComment = {
//         body: 'Comment Body',
//         username: 'existing_user',
//         articleId: 1
// };
const newComment = {
  method: 'POST',
  body: JSON.stringify({ comment: { body: 'Comment Body', articleId: 1, username: 'existing_user' } })
};


function createComment(url, request) {
  const requestComment = request.body && request.body.comment;
  const response = {};

  const comment = {
    id: database.nextCommentId++,
    body: requestComment.body,
    username: requestArticle.username,
    articleId: [],
    upvotedBy: [],
    downvotedBy: []
  };

  response.body = {comment: comment}
  response.status = 201;

  console.log(database.comments[database.nextCommentId]);
  console.log(requestComment);


  //database.comments[database.nextCommentId].comment = requestComment.body;
}


// function createComment(url, request) {
//   const comment = request;
//   const response = {};
//
//   //console.log(comment)
//
//   if (true /* && request.body.article /*&& database.users[request.username]*/) {
//     const newComment = {
//       id: database.nextCommentId,
//       username: comment.username,
//       articleId: comment.articleId
//     }
//     //console.log(newComment);
//
//     database.comments[newComment.id] = newComment;
//     response.status = 201;
//     response.body = {newComment: newComment};
//
//     database.nextCommentId = newComment.id;
//
//     return response;
//   } else {
//
//     response.status = 400;
//     return response;
//   }
// };


createComment(undefined, newComment);
//console.log(database);
