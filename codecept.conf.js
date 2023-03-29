const {setHeadlessWhen} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: './tests/*_tests.js',
    output: './output',
    helpers: {
        Playwright: {
            url: 'https://suitsupply.com/en-nl',
            show: true,
            browser: 'chromium',
            restart: true,
            waitForTimeout: 3000,
        }
    },
    include: {
        homePage: './pages/home.js',
    },
    bootstrap: null,
    mocha: {
        reporterOptions: {
            reportDir: "output"
        }
    },
    name: 'Dariia T',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
        allure: {
            enabled: true,
            outputDir: 'allure-results',
            require: '@codeceptjs/allure-legacy',
        }
    }
}
