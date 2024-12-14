import QMark from '../Assets/question-circle-fill.svg'


const Helper = () => {
    return (
        <img
            src={QMark}
            height="30"
            id="helper"
            className="mx-auto d-block"
            alt="Helper"
            data-bs-toggle="tooltip"
            data-bs-placement="right" 
            title="Tooltip on right"
        />
    );
}

export default Helper;
