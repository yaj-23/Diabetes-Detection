export default class APIService{
    // Insert an article
    static InsertArticle(body){
        return fetch(`/input_metrics`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}