const year = new Date().getFullYear();
const month = String(new Date().getMonth() + 1) .padStart(2, '0');
const day = String(new Date().getDate()).padStart(2, '0'); 
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);