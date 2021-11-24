import "./Message.scss";
export const Message = (props) => {
  return (
    <div>
      <h1 className="text">{props.helloWorld}</h1>
    </div>
  );
};

// Короткая запись:

// export const Message = ({helloWorld}) => {
//     return {
//         <div><h1>{helloWorld}</h1></div>
//     }
// }
