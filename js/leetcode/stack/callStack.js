const func1 =()=>{
    func2();
    console.log('iam 1');
};
const func2 = () =>{ 
    func3()
    console.log('iam 2')
 };
const func3 =() => { console.log('i am 3')};

func1();