class MyClass{
    static count = 0
    var1
    constructor(){
        this.var1 = 0
    }
    static Incr_count(){
        MyClass.count++
        console.log("Static count:"+MyClass.count)
    }
    Incr_InstanceVar(){
        this.var1++
        console.log("Instance Variable:"+this.var1)
    }
}

const obj1 = new MyClass()
const obj2 = new MyClass()
MyClass.Incr_count()
MyClass.Incr_count()
MyClass.Incr_count()
MyClass.Incr_count()

obj1.Incr_InstanceVar()
obj1.Incr_InstanceVar()

obj2.Incr_InstanceVar()
obj2.Incr_InstanceVar()
