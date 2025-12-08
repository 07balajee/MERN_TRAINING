const StudentCard = ({fName, lName, age}) =>{

    return(
           <div className="shadow-lg p-4 m-4 rounded-md">
            First name: {fName} <br/>
            Last name: {lName} <br/>
            Age: {age} <br/>
            Full name: {fName} {lName} <br/>
           </div>
    )
}
export default StudentCard;

//  props = {fName:"John", lName:"Doe", age:25}
//  const {fName, lName, age} = props
//  props.fName
//  props.lName
//  props.age
