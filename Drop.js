class Drop{
constructor(x,y){
     var options={
         restitution:0.1,
         friction=0.001
     }

    this.rain=Bodies.circle(x,y,5,options)
    this.radius=5;
    World.add(world,this.rain)
    

}
update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
     }
}
display(){
    var pos=this.rain.position
   fill("blue");
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.radius)

}
    




}