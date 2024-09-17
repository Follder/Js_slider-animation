# JS animated slider

## Demo
For Demo this project you can use [DEMO LINK](https://follder.github.io/Js_slider-animation/)

## Project anatomy

Find the "data" array to customize your slider. You can change each slide's image, description and page links ("read more" and "trigger button") for each slide individually. You can also add as many slides as you want (just add new objects to the current array "data")

  ```javascript
  const data = [
    {
      id: 1,
      text: "The first slide text...",
      url: "The first slide image url",
      readMore: 'The first slide "Read more" link url',
      triggerBtn: 'The first slide button link url',
    },
    {
      id: 2,
      text: "The second slide text...",
      url: "The second slide image url",
      readMore: 'The second slide "Read more" link url',
      triggerBtn: 'The second slide button link url',
    },
    {...}
  ]
  ```

You can adjust the autoplay time by changing the variable "AUTO_PLAY_DELAY".
But if you change the slides yourself, the autoplay will be stopped.

You can add pictures of different sizes. And if the description is too long, it can be trim.

This slider is flexible and mobile-friendly.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GSAP library
- Git
- Github

## Contacts

Dmytro Koriahin - [@Dmytro Koriahin](https://github.com/Follder) - [dmytro.koriahin@gmail.com](mailto:dmytro.koriahin@gmail.com)

Project Link: https://github.com/Follder/Js_slider-animation