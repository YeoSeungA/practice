
const Hello = ({name, age}) => {
    console.log(age);
    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
        </div>
    );
};

export default Hello;