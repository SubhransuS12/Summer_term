const body=document.querySelector('.body');
let count=1;

//Api Data fetching
const fecther=async (url,whatToSearch)=>{
  const news=await axios.get(url,{
    params:{
      apiKey:'bb966b573e2d4718980295efed823422',
      q:whatToSearch,
      sortBy:'popularity'
    }
  })
  return news;
}


//Creting army regarding data
const fetchdata2= async ()=>{
  const response=await fecther('https://newsapi.org/v2/everything','army')
  const articles=response.data.articles;
  for(let i=0;i<articles.length;i++){
    const div=document.createElement('div');
    div.classList.add('article');
    div.innerHTML=`
    <article class="card">
    <div class="card-user-details">
        <img src=${response.data.articles[i].urlToImage} alt="" class="navimg ">
        <span class="user-name">${response.data.articles[i].source.name}</span>
        <span class="card-date">${response.data.articles[i].publishedAt}</span>
    </div>
    <div class="card-details">
        <div class="card-title">
            <h2 class="card-topic">
                ${response.data.articles[i].title}
            </h2>
            <div class="card-sumary">${response.data.articles[i].content}</div>
            <a  class="read-link" href=${response.data.articles[i].url}>Read More</a>
        </div>
        <div class="cardimg"><img  width="150px" height="100px" style="border-radius:10px"src=${response.data.articles[i].urlToImage}  alt="" srcset=""></div>
        </div>
</article>
    `;
    body.appendChild(div);
  }
}


//Crating news Regarding data
const fetchdata1= async ()=>{

  body.innerHTML=``;
  const response=await fecther('https://newsapi.org/v2/top-headlines','sports')
  const articles=response.data.articles;
  console.log(response);
  for(let i=0;i<articles.length;i++){
    const div=document.createElement('div');
    div.classList.add('article');
    div.innerHTML=`
    <article class="card">
    <div class="card-user-details">
        <img src=${response.data.articles[i].urlToImage} alt="" class="navimg ">
        <span class="user-name">${response.data.articles[i].source.name}</span> 
        <span class="card-date">${response.data.articles[i].publishedAt}</span>
    </div>
    <div class="card-details">
        <div class="card-title">
            <h2 class="card-topic">
                ${response.data.articles[i].title}
            </h2>
            <div class="card-sumary">${response.data.articles[i].content}</div>
        </div>
        <div class="cardimg"><img  width="150px" height="100px" style="border-radius:10px"src=${response.data.articles[i].urlToImage}  alt="" srcset=""></div>
        </div>
</article>
    `;
    body.appendChild(div);
  }
}

fetchdata2();


//event listener for sports button
const sports=document.querySelector('.sports');
sports.addEventListener('click',async(event)=>{
  event.preventDefault();
  await fetchdata1();
})


