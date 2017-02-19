var sessionRestore = {
  save: function () {
    var data = {
      version: 2,
      state: JSON.parse(JSON.stringify(tabState))
    }

    // save all tabs that aren't private

    for (var i = 0; i < data.state.tasks.length; i++) {
      data.state.tasks[i].tabs = data.state.tasks[i].tabs.filter(function (tab) {
        return !tab.private
      })
    }

    localStorage.setItem('sessionrestoredata', JSON.stringify(data))
  },
  restore: function () {
  //  var data = localStorage.getItem('sessionrestoredata')


    var t= {
      "version":2,
      "state":{
        "tasks":[
          {
            "name":"Recent",
            "tabs":[
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"95012053645876320",
                "lastActivity":1487504498525,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://www.youtube.com/watch?v=UGHupqE1LCI",
                "title":"Castle Rock Teaser Reaction! - YouTube",
                "id":"73277727914185980",
                "lastActivity":1487501572830,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://en.wikipedia.org/wiki/Main_Page",
                "title":"Wikipedia, the free encyclopedia",
                "id":"73332686201756530",
                "lastActivity":1487501691415,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":true,
                "secure":true
              },
              {
                "url":"https://www.amazon.com/",
                "title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
                "id":"73957225632400940",
                "lastActivity":1487501702346,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://twitter.com/",
                "title":"Twitter. It\'s what\'s happening.",
                "id":"44975013314202060",
                "lastActivity":1487501711793,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.instagram.com/",
                "title":"Instagram",
                "id":"58248747849119380",
                "lastActivity":1487503759060,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              }
            ],
            "selectedTab":null,
            "id":"52122930893496200"
          },
          {
            "name":"Programming",
            "tabs":[
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              }
            ],
            "selectedTab":null,
            "id":"88417762424368000"
          },
          {
            "name":"Design",
            "tabs":[
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"95012053645876320",
                "lastActivity":1487504498525,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://www.youtube.com/watch?v=UGHupqE1LCI",
                "title":"Castle Rock Teaser Reaction! - YouTube",
                "id":"73277727914185980",
                "lastActivity":1487501572830,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://en.wikipedia.org/wiki/Main_Page",
                "title":"Wikipedia, the free encyclopedia",
                "id":"73332686201756530",
                "lastActivity":1487501691415,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":true,
                "secure":true
              },
              {
                "url":"https://www.amazon.com/",
                "title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
                "id":"73957225632400940",
                "lastActivity":1487501702346,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://twitter.com/",
                "title":"Twitter. It\'s what\'s happening.",
                "id":"44975013314202060",
                "lastActivity":1487501711793,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.instagram.com/",
                "title":"Instagram",
                "id":"58248747849119380",
                "lastActivity":1487503759060,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"95012053645876320",
                "lastActivity":1487504498525,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://www.youtube.com/watch?v=UGHupqE1LCI",
                "title":"Castle Rock Teaser Reaction! - YouTube",
                "id":"73277727914185980",
                "lastActivity":1487501572830,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://en.wikipedia.org/wiki/Main_Page",
                "title":"Wikipedia, the free encyclopedia",
                "id":"73332686201756530",
                "lastActivity":1487501691415,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":true,
                "secure":true
              },
              {
                "url":"https://www.amazon.com/",
                "title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
                "id":"73957225632400940",
                "lastActivity":1487501702346,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://twitter.com/",
                "title":"Twitter. It\'s what\'s happening.",
                "id":"44975013314202060",
                "lastActivity":1487501711793,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.instagram.com/",
                "title":"Instagram",
                "id":"58248747849119380",
                "lastActivity":1487503759060,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"95012053645876320",
                "lastActivity":1487504498525,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://www.youtube.com/watch?v=UGHupqE1LCI",
                "title":"Castle Rock Teaser Reaction! - YouTube",
                "id":"73277727914185980",
                "lastActivity":1487501572830,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://en.wikipedia.org/wiki/Main_Page",
                "title":"Wikipedia, the free encyclopedia",
                "id":"73332686201756530",
                "lastActivity":1487501691415,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":true,
                "secure":true
              },
              {
                "url":"https://www.amazon.com/",
                "title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
                "id":"73957225632400940",
                "lastActivity":1487501702346,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://twitter.com/",
                "title":"Twitter. It\'s what\'s happening.",
                "id":"44975013314202060",
                "lastActivity":1487501711793,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.instagram.com/",
                "title":"Instagram",
                "id":"58248747849119380",
                "lastActivity":1487503759060,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              }
            ],
            "selectedTab":null,
            "id":"97158360537070020"
          },
          {
            "name":"Shopping",
            "tabs":[
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              }
            ],
            "selectedTab":null,
            "id":"34423593871932612"
          },
          {
            "name":"News",
            "tabs":[
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },{
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              },
              {
                "url":"https://www.pinterest.com/",
                "title":"Pinterest • The world’s catalog of ideas",
                "id":"16692348366920350",
                "lastActivity":1487504311736,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.paypal.com/",
                "title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal",
                "id":"28152109338169116",
                "lastActivity":1487504316058,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.twitch.tv/lck1",
                "title":"LCK1 - Twitch",
                "id":"37104073121785896",
                "lastActivity":1487504321035,
                "private":false,
                "selected":true,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":true,
                "isReaderView":false,
                "readerable":false
              },
              {
                "url":"https://www.linkedin.com/",
                "title":"LinkedIn: Log In or Sign Up",
                "id":"85161670533733440",
                "lastActivity":1487504176506,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.ebay.com/",
                "title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
                "id":"39246692484134150",
                "lastActivity":1487504107238,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":false
              },
              {
                "url":"https://ru.aliexpress.com/",
                "title":"AliExpress — качественные товары по оптовым ценам",
                "id":"6823207029987644",
                "lastActivity":1487504258355,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.netflix.com/md/",
                "title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online",
                "id":"12592807665863038",
                "lastActivity":1487504284845,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"https://www.apple.com/",
                "title":"Apple",
                "id":"88491693115417200",
                "lastActivity":1487504288659,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "isReaderView":false,
                "readerable":false,
                "secure":true
              },
              {
                "url":"http://www.imdb.com/",
                "title":"IMDb - Movies, TV and Celebrities - IMDb",
                "id":"84326286726939950",
                "lastActivity":1487504300709,
                "private":false,
                "selected":false,
                "backgroundColor":"rgb(255, 255, 255)",
                "foregroundColor":"black",
                "secure":false,
                "isReaderView":false,
                "readerable":true
              }
            ],
            "selectedTab":null,
            "id":"86935658455240160"
          }
        ],
        "selectedTask":"52122930893496200"
      }
    }

    for (var i = 0; i < t.state.tasks.length; i++) {
      for (var j = 0; j < t.state.tasks[i].tabs.length; j++) {
        t.state.tasks[i].tabs[j].id = Math.round(Math.random() * 100000000000000000)
        // t.state.tasks[i].tabs[j].id = 'etf'
      }
    }

    /*console.info(JSON.stringify(t))
    console.info(t)*/


    //var data = '{"version":2,"state":{"tasks":[{"name":null,"tabs":[{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":"63413536383075340","lastActivity":1487496027851,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://edition.cnn.com/","title":"CNN - Breaking News, U.S., World, Weather, Entertainment & Video News","id":"19528921604295492","lastActivity":1487496927819,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":false},{"url":"http://www.ebay.com/rpp/electronics-en","title":"Buy Electronics Online - Phones, TVs, Computers, Tablets, Video Games | eBay","id":"84516027066480000","lastActivity":1487495967022,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":false}],"selectedTab":null,"id":"26855107726298444"},{"name":null,"tabs":[{"url":"https://www.youtube.com/","title":"YouTube","id":"62404726852367820","lastActivity":1487498692427,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":"7305010209025165","lastActivity":1487498737116,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://about.twitter.com/company","title":"Company | About","id":"65847804851668140","lastActivity":1487499173891,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true}],"selectedTab":null,"id":"511366094700638"}],"selectedTask":"511366094700638"}}'
    // var data = '{"version":2,"state":{"tasks":[{"name":"Recent","tabs":[{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":"95012053645876320","lastActivity":1487505733971,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://www.youtube.com/watch?v=UGHupqE1LCI","title":"Castle Rock Teaser Reaction! - YouTube","id":"73277727914185980","lastActivity":1487501572830,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://en.wikipedia.org/wiki/Main_Page","title":"Wikipedia, the free encyclopedia","id":"73332686201756530","lastActivity":1487501691415,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":true},{"url":"https://www.amazon.com/","title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more","id":"73957225632400940","lastActivity":1487501702346,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":"44975013314202060","lastActivity":1487501711793,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.instagram.com/","title":"Instagram","id":"58248747849119380","lastActivity":1487503759060,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"52122930893496200"},{"name":"Programming","tabs":[{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":"85161670533733440","lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":"39246692484134150","lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":"6823207029987644","lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":"12592807665863038","lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":"88491693115417200","lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":"84326286726939950","lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":"16692348366920350","lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":"28152109338169116","lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":"37104073121785896","lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"88417762424368000"},{"name":"Design","tabs":[{"url":"","title":"","id":"27233349799152240","lastActivity":1487504440495,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black"}],"selectedTab":null,"id":"97158360537070020"},{"name":"Shopping","tabs":[{"url":"","title":"","id":"64982896998240490","lastActivity":1487501490177,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black"}],"selectedTab":null,"id":"34423593871932612"},{"name":"News","tabs":[{"url":"","title":"","id":"87562381090109060","lastActivity":1487501532503,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black"}],"selectedTab":null,"id":"86935658455240160"}],"selectedTask":"52122930893496200"}}'
    var data = '{"version":2,"state":{"tasks":[{"name":"Recent","tabs":[{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":50775765237627944,"lastActivity":1487504498525,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://www.youtube.com/watch?v=UGHupqE1LCI","title":"Castle Rock Teaser Reaction! - YouTube","id":77605874953115040,"lastActivity":1487501572830,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://en.wikipedia.org/wiki/Main_Page","title":"Wikipedia, the free encyclopedia","id":31621490587841828,"lastActivity":1487501691415,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":true},{"url":"https://www.amazon.com/","title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more","id":72927632300784210,"lastActivity":1487501702346,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":62355629766392150,"lastActivity":1487501711793,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.instagram.com/","title":"Instagram","id":72297870379213470,"lastActivity":1487503759060,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"52122930893496200"},{"name":"Programming","tabs":[{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":38095954444832670,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":97155576174732030,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":9561222901871936,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":67289595700801816,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":77221860908929860,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":94634737771444220,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":93500402927004750,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":75814059689905070,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":84900456432898510,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"88417762424368000"},{"name":"Design","tabs":[{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":10016310059826994,"lastActivity":1487504498525,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://www.youtube.com/watch?v=UGHupqE1LCI","title":"Castle Rock Teaser Reaction! - YouTube","id":19599947849589184,"lastActivity":1487501572830,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://en.wikipedia.org/wiki/Main_Page","title":"Wikipedia, the free encyclopedia","id":35605755523936970,"lastActivity":1487501691415,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":true},{"url":"https://www.amazon.com/","title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more","id":41678586917809144,"lastActivity":1487501702346,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":82309946608782460,"lastActivity":1487501711793,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.instagram.com/","title":"Instagram","id":52686453330673390,"lastActivity":1487503759060,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":50598456831328264,"lastActivity":1487504498525,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://www.youtube.com/watch?v=UGHupqE1LCI","title":"Castle Rock Teaser Reaction! - YouTube","id":33987827869940590,"lastActivity":1487501572830,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://en.wikipedia.org/wiki/Main_Page","title":"Wikipedia, the free encyclopedia","id":56962497014627680,"lastActivity":1487501691415,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":true},{"url":"https://www.amazon.com/","title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more","id":9935952609750930,"lastActivity":1487501702346,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":85035441001128590,"lastActivity":1487501711793,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.instagram.com/","title":"Instagram","id":89633481384717970,"lastActivity":1487503759060,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":96817986180060430,"lastActivity":1487504498525,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://www.youtube.com/watch?v=UGHupqE1LCI","title":"Castle Rock Teaser Reaction! - YouTube","id":93984200090055040,"lastActivity":1487501572830,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://en.wikipedia.org/wiki/Main_Page","title":"Wikipedia, the free encyclopedia","id":34205693873481800,"lastActivity":1487501691415,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":true,"secure":true},{"url":"https://www.amazon.com/","title":"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more","id":38297498248618390,"lastActivity":1487501702346,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://twitter.com/","title":"Twitter. It\'s what\'s happening.","id":33548014968215424,"lastActivity":1487501711793,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.instagram.com/","title":"Instagram","id":899816036178724,"lastActivity":1487503759060,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"97158360537070020"},{"name":"Shopping","tabs":[{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":31558374496961172,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":82553869090968640,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":31593701816826436,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":25657459813248852,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":7312606380652897,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":92726989699804660,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":55443528158514520,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":42973635711586140,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":47889904880564020,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":6122696629814639,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":15163520512000894,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":34729107945947500,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":1878271551822475,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":42918673301747340,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":76032433530723760,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":37727176633056136,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":53871796587247990,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":99804581089159100,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":80461068607339630,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":24615328547679936,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":86736614203097730,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":44051998008631380,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":12857634272077668,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":56199405964178520,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":63041146875707656,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":89353688959959060,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":43634314155502960,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":30784895890369012,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":52322111876974860,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":44477480995792296,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":16755352244110578,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":75789689794860690,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":93106879716144420,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":22152092481549924,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":10226926685848036,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":71456477798465890,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false}],"selectedTab":null,"id":"34423593871932612"},{"name":"News","tabs":[{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":74070195895690320,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":86848249161050140,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":72892577329193680,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":10826781403908026,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":49238165246584890,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":24844564466266172,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":77616655531035280,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":84953155510525730,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":50642745993044930,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":99511071038553010,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":43395734835952110,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":9422370441856120,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":37849111435083896,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":73028639795980930,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":44372190191221920,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":60297928621371090,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":67736905656620070,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":36082545136835400,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":73687578843032670,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":32158339798676330,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":35843776006356844,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":92175613274685840,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":93855385473249470,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":80702684109673940,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":3707074174825342,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":7461239560252930,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":10317348442755580,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":14824904256443960,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":87672953683558610,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":43375713553766216,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":9649711492316526,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":22747761578906856,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":40030756369001464,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":78996516675632540,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":72792397184914580,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":38284165380988690,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":71848859422888030,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":81303948123607200,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":94223192617885280,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":45537764534835850,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":95329003991205500,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":28944185229725396,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":92819510056227710,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":41342070699453150,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":21739056550808144,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":99979213259316560,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":85457014145261730,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":90671288402088270,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":67818459933914136,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":23184169894589980,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":88858081696343500,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true},{"url":"https://www.pinterest.com/","title":"Pinterest • The world’s catalog of ideas","id":49469731459424240,"lastActivity":1487504311736,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.paypal.com/","title":"Send Money, Pay Online or Set Up a Merchant Account - PayPal","id":70297776499440536,"lastActivity":1487504316058,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.twitch.tv/lck1","title":"LCK1 - Twitch","id":52833464915883980,"lastActivity":1487504321035,"private":false,"selected":true,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":true,"isReaderView":false,"readerable":false},{"url":"https://www.linkedin.com/","title":"LinkedIn: Log In or Sign Up","id":5525084877643249,"lastActivity":1487504176506,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.ebay.com/","title":"Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay","id":6218822796947965,"lastActivity":1487504107238,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":false},{"url":"https://ru.aliexpress.com/","title":"AliExpress — качественные товары по оптовым ценам","id":20733694014732908,"lastActivity":1487504258355,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.netflix.com/md/","title":"Netflix Moldova - Watch TV Shows Online, Watch Movies Online","id":37431542263921510,"lastActivity":1487504284845,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"https://www.apple.com/","title":"Apple","id":43550926115538080,"lastActivity":1487504288659,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","isReaderView":false,"readerable":false,"secure":true},{"url":"http://www.imdb.com/","title":"IMDb - Movies, TV and Celebrities - IMDb","id":19211171505508064,"lastActivity":1487504300709,"private":false,"selected":false,"backgroundColor":"rgb(255, 255, 255)","foregroundColor":"black","secure":false,"isReaderView":false,"readerable":true}],"selectedTab":null,"id":"86935658455240160"}],"selectedTask":"52122930893496200"}}'


    // first run, show the tour
    if (!data) {
      tasks.setSelected(tasks.add()) // create a new task

      var newTab = currentTask.tabs.add({
        url: 'https://palmeral.github.io/min/tour'
      })
      addTab(newTab, {
        enterEditMode: false
      })
      return
    }

    console.log(data)

    data = JSON.parse(data)

    localStorage.setItem('sessionrestoredata', '')

    // the data isn't restorable
    if ((data.version && data.version !== 2) || (data.state && data.state.tasks && data.state.tasks.length === 0)) {
      tasks.setSelected(tasks.add())

      addTab(currentTask.tabs.add(), {
        leaveEditMode: false // we know we aren't in edit mode yet, so we don't have to leave it
      })
      return
    }

    // add the saved tasks

    data.state.tasks.forEach(function (task) {
      // restore the task item
      tasks.add(task)
    })

    // switch to the previously selected tasks

    switchToTask(data.state.selectedTask)

    if (isEmpty(currentTask.tabs)) {
      enterEditMode(currentTask.tabs.getSelected())
    }
  }
}

// TODO make this a preference

sessionRestore.restore()

setInterval(sessionRestore.save, 12500)
