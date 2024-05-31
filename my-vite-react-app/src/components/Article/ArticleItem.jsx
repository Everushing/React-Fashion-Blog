

function ArticleItem() {
   
    return (
       <>
         <h4>{date}</h4>
         <h3>{title}</h3>
         <img>{image}</img>
         <p>{content}</p>
   
         <hr />
       </>
     );
   }
   
   export default ArticleItem;