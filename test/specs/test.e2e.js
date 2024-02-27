
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/Home.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('Swag Labs' , () => {
    it('should login with standard_user credentials' , async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials' , async () => {
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })

    it('should get login error with problem_user credentials' , async () => {
        //TODO : akan dibuatkan skenario negatif case
    })

    it('should get login error with performance_glitch_user credentials' , async () => {
        //TODO : akan dibuatkan skenario negatif case
    })

    it('should get login error with error_user credentials' , async () => {
        //TODO : akan dibuatkan skenario negatif case
    })

    it('should get login error with visual_user credentials' , async () => {
        //TODO : akan dibuatkan skenario negatif case
    })
    
});
