function BeautifulScreen(props) {
    return (
        <div className="screen">
            <div className="current-operation">{props.currentOperation}</div>
            <div className="result">{props.result}</div>
        </div>
    );
}

export default BeautifulScreen;
