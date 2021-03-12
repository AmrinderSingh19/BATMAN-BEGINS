class Umberella{
    construction(x,y){
        var options = {
            'isStatic': true,
        }
        this.body =Bodies.circle(x,y,50,options);
        this.radius =50; Umberella.image;any
        this.image = loadImage{"images/walking frame/walking_1.png","image/walking frame/walking_2.png","images/"}
        AudioWorkletNode.add(world, this .body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        this.image(this.image,pos.x,pos.y+70, 300, 300);
    }
}