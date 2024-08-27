document.addEventListener("DOMContentLoaded", function() {
  var hash = window.location.hash.substring(1); // Get hash without '#'
  if (hash) {
      var postElements = document.querySelectorAll('.post-detail__article');
      postElements.forEach(function(post) {
          if (post.id === hash) {
              post.style.display = 'block'; // Show the post matching the hash
          } else {
              post.style.display = 'none'; // Hide other posts
          }
      });
  }
});

// Function to initialize comments for a specific post
function initializePostComments(postId) {
  const postElement = document.getElementById(postId);
  const userComment = postElement.querySelector(".usercomment");
  const publishBtn = postElement.querySelector("#publish");
  const commentSection = postElement.querySelector(".comments");
  const userName = postElement.querySelector(".user");

  // Load existing comments from local storage for this post
  function loadComments() {
      const storedComments = JSON.parse(localStorage.getItem(postId)) || [];
      commentSection.innerHTML = storedComments.join('');
      updateCommentCount();
  }

  // Save a new comment to local storage for this post
  function saveComment(commentHtml) {
      let comments = JSON.parse(localStorage.getItem(postId)) || [];
      comments.push(commentHtml);
      localStorage.setItem(postId, JSON.stringify(comments));
  }

  function updateCommentCount() {
      const commentsNum = commentSection.querySelectorAll(".parents").length;
      postElement.querySelector("#comment").textContent = commentsNum;
  }

  userComment.addEventListener("input", () => {
      if (!userComment.value) {
          publishBtn.setAttribute("disabled", "disabled");
          publishBtn.classList.remove("abled");
      } else {
          publishBtn.removeAttribute("disabled");
          publishBtn.classList.add("abled");
      }
  });

  publishBtn.addEventListener("click", () => {
      if (!userComment.value) return;

      const userId = {
          name: userName.value,
          identity: userName.value !== "Anonymous",
          image: "images/user.png",
          message: userComment.value,
          date: new Date().toLocaleDateString()
      };

      const published = `
      <div class="parents">
          <img src="${userId.image}" alt="User Image">
          <div>
              <h1>${userId.name}</h1>
              <h1>${userId.message}</h1>
              <div class="engagements">
                  <img src="images/like.png" alt="Like">
                  <img src="images/share.png" alt="Share">
              </div>
              <span class="date">${userId.date}</span>
          </div>
      </div>`;

      commentSection.innerHTML += published;
      saveComment(published);
      userComment.value = "";
      updateCommentCount();
  });

  // Load comments when the page is loaded
  loadComments();
}

// Initialize comments functionality for each post
document.addEventListener('DOMContentLoaded', () => {
  initializePostComments("post1");
  initializePostComments("post2");
  initializePostComments("post3");
  initializePostComments("post4");
  initializePostComments("post5");
  initializePostComments("post6");
  initializePostComments("post7");
  initializePostComments("post8");
  initializePostComments("post9");
  initializePostComments("post10");
  initializePostComments("post11");
  initializePostComments("post12");
});

