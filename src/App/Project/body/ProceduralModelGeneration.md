# Introduction

The goal of this project is to develop a method to generate models by simply provides a music (or sound waves) as parameter. I used Autodesk Maya and its Python scripting interface to accomplish the model generating process. Before generating, we use a Node.js script to analyze and reshape the sound wave to make it able to be processed on Maya.

![](/images/image31.png)

Here is an early approach, mapping sound wave frequencies to a height map and use shaders to map the height map onto model surfaces.

<iframe class="youtube" src="https://www.youtube.com/embed/IG7YbZ7mZO4 " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>