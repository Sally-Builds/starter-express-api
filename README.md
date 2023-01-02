# starter-express-api

This is the simplest possible nodejs api using express that responds to any request with: 
```
Yo!
```

## 1) Fetching List of News

```
route: /api/news?page=page_number
method: get
eg: /api/news?page=3
```
***NB: if no page number is specified the first page will be rendered***

### => Data model for news list
```js
{
    cover_photo_small_size: string,
    cover_photo_big_size: string,
    link: string,
    title: string,
    author: string,
    date: string,
    description: string
    id: number,
    category: string,
}
```


## 2) Get A Particular News Article
```
route: /api/news?find=url_of_news
method: post
eg: /api/news?find=https://coalcity.ng/igp-usman-alkali-baba-grants-gov-ugwuanyis-request-for-more-personnel-and-equipment/
```
### => Data model for news
```js
{
    article: string,
    title: string,
    images: string,
    coverPhoto: string
}
```
***NB: might still have to add authors name***

## 3)  Get the Total number of pages
```
route: /api/news/total_pages
method: get
```

# 2) TV
```
route: /api/tv/
method: get
```

### => Data model for tv 
```js
{
    thumbnails: string,
    title: string,
    Link: string,
    publishedAt: Date,
    description: string
}
```


### Deploy it in 7 seconds: 

[![homepage](https://deploy.cyclic.app/button.svg)](https://cute-jade-narwhal-sari.cyclic.app/)

