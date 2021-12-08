window.onload = function() {
    fetchAllBlogPosts();
}

async function fetchAllBlogPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();
        console.log(blogPosts);
        let blogPostsHTML = '';    
        
        for(let blogPost of blogPosts) {
            console.log(blogPost)
            
            let blogDate = new Date(blogPost.date);
            let getMonth = blogDate.getMonth()
            console.log(getMonth)
            /*Set name of month*/ 
            let month;
            switch(getMonth){
                case 0:
                month = "January";
                break;
                case 1:
                month = "February";
                break;
                case 2:
                month = "Mars";
                break;
                case 3:
                month = "April";
                break;
                case 4:
                month = "May";
                break;
                case 5:
                month = "June";
                break;
                case 6:
                month = "July";
                break;
                case 7:
                month = "August";
                break;
                case 8:
                month = "September";
                break;
                case 9:
                month = "October";
                break;
                case 10:
                month = "November";
                break;
                case 11:
                month = "December";
                break;
            }
            let formatedDate = `${blogDate.getDate()} ${month} ${blogDate.getFullYear()}`
            let id = blogPost._id
            let firstPageContent = blogPost.content.substring(0,1)
            console.log(firstPageContent)
            blogPostsHTML += `
                <article class="each-blog-post" data-id=${id}>
                
                <h1>${blogPost.title}</h1>

                <section id="info-index">
                <h5><i>${formatedDate}</i></h5>
                    <h4>Written by: ${blogPost.author}</h4>
                    </section>

                    <section id="section-blog-content">
                    <p>${firstPageContent}<a href="post.html?id=${id}" class="read-more" data-id="${id}"><i>...Read more</i></a></p>
                    </section>

                    <section id="tags-of-post">
                    <i>${blogPost.tags}</i>
                    </section>

                    </article>
            `
        }
                document.getElementById('blog-content').innerHTML = blogPostsHTML;
            } catch(error) {
            console.log(error);
        }
}
