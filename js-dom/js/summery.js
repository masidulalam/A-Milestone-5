console.log('i am from summery js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
    console.log(blog);
    blog.style.backgroundColor = 'chocolate'
    blog.style.color = 'white';
}

const omnis = document.getElementById('omnis');
// omnis.innerText = 'omnis thke harun korlam';
omnis.innerHTML = `
<h2>harun vaier praragraph</h2>
<div>
    <ul>
        <li>ami pari re vai</li>
        <li>LoL er Lol murigi</li>
    </ul>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, doloribus veritatis. Dolorum,
magnam alias sit facere, asperiores voluptas vitae, ullam dolor est esse ea facilis quidem eum inventore
eveniet accusantium.</p>
`

const friendsList = document.getElementById('friend-list');
// console.log(friendsList.childNodes)
// friendsList.removeChild(friendsList.children[4])
//or
const fifth = friendsList.children[4];
console.log(fifth);
friendsList.removeChild(fifth);


// const newLi = document.createElement('li');
// newLi.innerText = 'Friends-11';

// friendsList.appendChild(newLi)

//or
const newLi = document.createElement('li');
newLi.innerHTML = '<li>Friends-11</li>';
friendsList.appendChild(newLi);

//or we can add new ul
const newUl = document.createElement('ul');
// newLi.innerHTML = '<li>llll</li><li>llll</li><li>llll</li>';
newUl.innerHTML = `
<li>Junior-1</li>
<li>Junior-2</li>
<li>Junior-3</li>
`;
friendsList.appendChild(newUl)
