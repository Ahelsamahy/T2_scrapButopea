describe('check component\'s text', () => {
  it('load the site', () => {
    cy.visit('https://butopea.com')
  })
  it("check if image exists, then output the url for it", () => {
    cy.get('div[class="banner-square-image"]').eq(1).then(($ele) => {
      if ($ele.children('img').length > 0) {
        cy.log("https://butopea.com" +$ele.children('img').attr('src'))
      } else {
        throw new Error("test fails here")
      }
    });
  });

  it("check square contains text, also the button, then output the text for each", () => {
    cy.get('[class="banner-square-overlay-container"]').find("div").then(($ele) => {
      if ($ele.find("div").children('p').text().length > 0 && $ele.find("div").children('button').text().length > 0) {
        cy.log("text in label is: "+$ele.find("div").children('p').text())
        cy.log("text in button is: "+$ele.find("div").children('button').text())
      } else {
        throw new Error("test fails here")
      }
    });
  });
})
describe('check list of products', () => {
  it('load the site and click on a topbar button', () => {
    cy.visit('https://butopea.com');
    cy.get('button[class="secondary-font no-wrap"]').eq(2).click();
  })

  // Needed info: product link, title, image url, price
  it("check for list of products then extract their info", () => {
    cy.get('div[class*="product-listing"]', { timeout: 2000 }).should('be.visible').each(($ele) => {
      if ($ele.children().length > 0) {
        for (let i = 0; i < $ele.children().length; i++) {
          const eachProduct = $ele.children().eq(i);
          cy.log("Link to product page: https://butopea.com" + eachProduct.find('a').attr('href') + "\n" +
            "Title is " + eachProduct.find('p[class*="product-name"]').text().trim() + "\n" +
            "Original image link is: https://butopea.com" + eachProduct.find('div[class*="original-thumbnail"]').find('img').last().attr('src') + "\n" +
            "Cost is " + eachProduct.find('div[class*="product-tile-info"]').find('div').text().trim()
          )
        }
      } else {
        throw new Error("test fails here")
      }
    });
  });
})