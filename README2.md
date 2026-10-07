# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: https://github.com/k-uematsu-1247/frontendMentorNewbie4
- Live Site URL: https://frontendmentornewbie4.onrender.com/
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

Through this project, I learned how to integrate semantic HTML structure with highly accessible and state-driven CSS, while keeping JavaScript lean and focused.

Here are the key takeaways from my implementation:

1. **Accessible Hidden Elements:**
   Instead of using `display: none` for inputs and legends, I used dimensional sizing to keep them screen-reader friendly while visually hidden.

2. **State Management via Modern CSS (`:has()`):**
   I managed the active selection style purely through CSS without writing a single line of state-tracking JavaScript, which drastically reduced complexity.

```css
/* Styling the label based on the checked state of its internal radio button */
label:has(input:checked) {
    background-color: var(--White);
    color: var(--Grey-950);
}
```

3. **Secure Form Submission in JavaScript:**
   I utilized the `submit` event instead of a simple `click` event to support keyboard-based (Enter key) form submissions properly, paired with `event.preventDefault()` to avoid full-page reloads.

```js
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const radio = document.querySelector("[name=rating]:checked");
    if (radio) {
        scoreSpan.textContent = radio.value;
        form.classList.add("hidden");
        cardThankyou.classList.remove("hidden");
    }
});
```

### Continued development

In future projects, I want to explore:
- Implementation of automated CSS accessibility checking tools.
- Deeper usage of client-side state handling before advancing to full-stack components.

### AI Collaboration

During this project, I collaborated effectively with an AI assistant to reason through structural patterns and refine edge cases.

- **Tools Used:** ChatGPT/Claude
- **Methodology:** Instead of generating boilerplate code, I focused on a question-driven approach to thoroughly understand structural definitions such as event delegation, modern pseudo-classes (`:has()`), and editor autocomplete mechanisms (`JSDoc`).
- **Outcome:** This collaborative workflow accelerated my debugging capabilities and enhanced my conceptual breakdown of Vanilla JS workflows.

## Author

- Frontend Mentor - [@ k-uematsu-1247](https://www.frontendmentor.io/profile/k-uematsu-1247)