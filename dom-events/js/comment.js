document.getElementById('post-comment').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
    commentBox.value = '';
})