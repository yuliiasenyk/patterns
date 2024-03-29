// delegates instantiation to  subclasses
//https://alligator.io/js/factory-pattern/

class TailFactory {
    constructor(props) {
        this.tailLength = props.tailLength;
    }
};

class TorsoFactory {
    constructor(props) {
        this.color = props.color;
    }
};

class HeadFactory {
    constructor(props) {
        this.snoutLenth = props.snoutLenth;
    }
};

class ReptilePartFactory {
    constructor(type, props) {
        if(type === "tail")
            return new TailFactory(props);
        if(type === "torso")
            return new TorsoFactory(props);
        if(type === "head")
            return new HeadFactory(props);
    }
};

let alligator = {};
let alligatorProps = {
    tailLength : 2.5,
    color: "green",
    snoutLenth: 1
};

//gets a tail from the tail factory
alligator.tail  = new ReptilePartFactory("tail", alligatorProps);

//gets a torso from the torso factory
alligator.torso = new ReptilePartFactory("torso", alligatorProps);

//gets a head from the head factory
alligator.head  = new ReptilePartFactory("head", alligatorProps);