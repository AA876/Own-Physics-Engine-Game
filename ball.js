class Ball{
constructor(x,y,r){
var options = {
'resitution': 0.8,
'friction': 0.5,
'density': 1.0,   
}
this.x = x
this.y = y
this.r = r
this.body = Bodies.circle(x,y,this.r/2,options)
this.Visiblity = 255;
World.add(world, this.body)
} 
display(){
var pos = this.body.position
push ()
translate (pos.x,pos.y)
fill (255,165,0)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)    
pop ()
}  
}