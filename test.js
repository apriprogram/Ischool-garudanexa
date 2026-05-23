const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

dom.window.document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("DOM loaded. Executing click...");
        // find the first option
        const btn = dom.window.document.querySelector('.ai-opt-btn');
        if (!btn) {
            console.log("Button not found!");
            return;
        }
        
        console.log("Before click: ", btn.outerHTML);
        dom.window.clickAiOption(btn);
        console.log("After click: ", btn.outerHTML);
        
        const feedback = dom.window.document.querySelector('#ai-sim-feedback');
        console.log("Feedback element: ", feedback ? feedback.outerHTML : "Not found!");
    } catch (err) {
        console.error("Error in test:", err);
    }
});
