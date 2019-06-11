const getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

const nestedTarget = () => {
  return document.querySelector('#nested .target');
};

const deepestChild = () => {
  let parentNode = document.querySelector('#grand-node');
  let childNode = parentNode.children[0];
  while (childNode) {
    parentNode = childNode;
    childNode = parentNode.children[0];
  };
  return parentNode;
};

const increaseRankBy = (n) => {
  const rankedList = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    let lists = rankedList[i].children;
    for (let j = 0; j < lists.length; j++) {
      lists[j].innerHTML = parseInt(lists[j].innerHTML) + n;
    };
  };
};
