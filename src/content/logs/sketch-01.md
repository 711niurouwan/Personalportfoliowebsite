---
title: "Treaded Delivery Robot"
date: "March 2026"
type: "Mechanical Design"
status: "Published"
role: "Lead Mechanical Engineer"
intro: "This is 25-26 SET project."
tech: ["SolidWorks", "3D Printing","Sheet Metal Fabrication", "Tank Tread Design"]
description: "Design and build an autonomous delivery robot. "
image: "/assets/sketch-01/setdeliveryrobobeforeshowcase.jpg"
slug: "sketch-01"
note: "In Progress"
---

## Mar.27th
I ran into a problem where the sprocket and links bite starts mismatching when wrapped around.

Try to solve “Polygon” effect. 

The sprocket and link works when the link is laid down but doesn’t work when it is wrapped around as the link does not form a perfect circle it is a polygon. 

Our current sprocket pitch is 0.75in and pitch diameter is 4inch, number of teeth is 16. I increased the number of teeth to 17. 

Some of the chordal dimensions from the previous versions are a little questionable. 

I remade the sprocket based on the matlab script I made which provided me with all the dimensions, and it works perfectly!

![MATLAB Screenshot](/assets/sketch-01/matlab-ss.png)

![Sprocket Sketch](/assets/sketch-01/sprocket_sketch.png)

## Dec.21st
Updated the side bars for the tread link. Originally there are some extra materials on the cylinder that are gonna cause the link not be able to slide smoothly. 

Todos: 
1. Increase the clearance gap between the bars so it can rotate smoother
2. Work on alignment of the wheels and the guide teeth design. 

## Nov.22nd
Tried contact sets and joints to figure out the link motion study. Didn’t work because too much computation is required and the contact sets break if I tried to drag components too quickly. 