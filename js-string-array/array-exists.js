function megaFriend(friends) {
    let mega = friends[0];
    if (Array.isArray(friends) == false) {
        return 'boka chele array dau'
    }
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['sabir', 'kabbir', 'masidul', 'mdmasidul', 'rubeldaddaaa'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf('kabir') != -1) {
    // console.log('kabbir exist')
}
else {
    // console.log("kabir doesn't exist")
}

if (friends.includes('kabbir') == true) {
    // console.log('kabbir eeeexists')
}
//true dileo chole na dileo chole
if (friends.includes('kabbir')) {
    // console.log('kabbir eeeexists')
}

//conscat 
const first = [1, 2, 3, 4, 6];
const second = [5, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);