// describe('check component\'s text', () => {
//   it('load the site', () => {
//     cy.visit('https://butopea.com')
//   })
//   it("check if image exists, then output the url for it", () => {
//     cy.get('[class="banner-square-column p0 col-xs-12 col-md-4 relative"][style="order:3"]').find("a").find(".banner-square-wrapper").find(".banner-square-image").then(($ele) => {
//       if ($ele.children('img').length > 0) {
//         cy.log($ele.children('img').attr('src'))
//       } else {
//         throw new Error("test fails here")
//       }
//     });
//   });

//   it("check square contains text, also the button, then output the text for each", () => {
//     cy.get('[class="banner-square-overlay-container"]').find("div").then(($ele) => {
//       if ($ele.find("div").children('p').text().length > 0 && $ele.find("div").children('button').text().length > 0) {
//         cy.log("text in label is: "+$ele.find("div").children('p').text())
//         cy.log("text in button is: "+$ele.find("div").children('button').text())
//       } else {
//         throw new Error("test fails here")
//       }
//     });
//   });
// })
describe('check list of products', () => {
  it('load the site', () => {
    cy.visit('https://butopea.com');
    cy.get('button[class="secondary-font no-wrap"]').eq(2).click();
  })
  //product link, title,image url, price
  it("check for list of products", () => {
    cy.get('div[class*="product-listing"]', { timeout: 2000 }).should('be.visible').each(($ele) => {
      if ($ele.children().length > 0) {
        const eachProduct = $ele.children().eq(0);
        cy.log("Link to product page: https://butopea.com" + eachProduct.find('a').attr('href') + "\n" +
          "Title is " + eachProduct.find('p[class*="product-name"]').text().trim() + "\n" +
          "Original image link is: https://butopea.com" + eachProduct.find('div[class*="original-thumbnail"]').find('img').last().attr('src') + "\n" +
          "Cost is " + eachProduct.find('div[class*="product-tile-info"]').find('div').text().trim()
        )
        // cy.log("Title is " + eachProduct.find('p[class*="product-name"]').text())
        // cy.log("Original image link is: https://butopea.com" + eachProduct.find('div[class*="original-thumbnail"]').find('img').last().attr('src'))
        // cy.log("Cost is" + eachProduct.find('div[class*="product-tile-info"]').find('div').text())
      } else {
        throw new Error("test fails here")
      }
    });
  });
})


// .should('be.visible')