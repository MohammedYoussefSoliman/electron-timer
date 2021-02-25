export const handleStyleClasses = (baseClass:string, classes?:string) => {
    let classArr:string[];
    if(classes) {
        classArr = classes.split(' ');
        classArr.unshift(baseClass)
        return classArr.join(' ')
    }else{
        return baseClass
    }
    
}