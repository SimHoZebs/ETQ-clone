## Some deliberate decisions

### Q. Why doesn't the Hero img use `<picture>` & `<source>` instead?

Because the images use vastly different styles for each viewport. Using them would create two sources that control the style of the view, only complicating the implimentation.
