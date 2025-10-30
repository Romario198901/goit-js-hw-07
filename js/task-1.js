const categories = document.querySelectorAll('.item'); 
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('.item-title').textContent;
  const elements = category.querySelectorAll('.item-list-name'); 
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});

