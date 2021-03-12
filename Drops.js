class createDrops{
    constructor(x,y){
        var options= {
            'restitution':0.1,
            'friction':0.1,
        }
          this.body= bodies.circle( x, y, 5, options);
          this.radies= 5;
          World.add(world, this.body);

    }

    update(){
        if(this.body.position.y > hiegth){
          Matter.body.setPosition(this.body,{x:ramdom(0, 500), y:random(0, 650)});
        }
    }

    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIES);
        ellipseMode(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }

    }



