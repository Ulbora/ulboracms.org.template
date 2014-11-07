describe("Hello World Test", function(){
    it("should test the main page", function(){
        browser.get("site");
        expect(browser.getTitle().toEqual("title"));
        element(by.model("modileAtt")).sendKeys;
        element(by.model("modileAtt")).click();
        
    });
});