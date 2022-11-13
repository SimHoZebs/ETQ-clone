## Introduction

This is a clone of a shoe website in Amsterdam called [ETQ](https://etq.amsterdam.com). It was to compete for one empty spot in a programming club.

Built using Preact, Vite and WindiCSS.

### Particularly difficult implementations

- 'Our Favorite Models' section navigation

## Some deliberate decisions

### Q. Why doesn't the Hero img use `<picture>` & `<source>` instead?

This is a valid questison as `picture` and `source` supports responsive design at the HTML level. However, the images use vastly different styles for each viewport. Using them would create two sources that control the style of the view, only complicating the implimentation.

### Q. Did you join the club?

I was invited to join the club, but I declined for personal reasons.
