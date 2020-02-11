import {settings, select, classNames} from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';


const app = {
  initBooking: function(){
    const thisApp = this;
    const container = document.querySelector(select.containerOf.booking);

    thisApp.booking = new Booking(container);

  },
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    //thisApp.navLinks = document.querySelectorAll(select.new.link);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id === idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /*get page id from href attribute*/ 
        const id = clickedElement.getAttribute('href').replace('#', '');
        /*run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /*change url hash */
        window.location.hash = '#/' + id;
      });
    }
  },
  activatePage: function(pageId){
    const thisApp = this;

    /*add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }
    /*add class "active" to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') === '#' + pageId
      );
    }
  },
  initCart: function(){
    const thisApp = this;
    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function(event){
      app.cart.add(event.detail.product);

    });
  },
  initMenu: function(){
    const thisApp = this;
    //console.log('thisApp.data:', thisApp.data);
    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }

    //const testProduct = new Product();
    //console.log('testProduct:', testProduct);
  },
  initData: function(){
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.product;
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        thisApp.data.products = parsedResponse;
        /*save parsedResponse as thisApp.data.products */
        thisApp.initMenu();
        /*execute initMenu method */
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));

    thisApp.data = {};
  },
  init: function(){
    const thisApp = this;
    //console.log('*** App starting ***');
    //console.log('thisApp:', thisApp);
    //console.log('classNames:', classNames);
    //console.log('settings:', settings);
    //console.laog('templates:', templates);

    thisApp.initPages();
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
  },
};

app.init();
