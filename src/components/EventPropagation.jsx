import "./CssEventHandling.css";
export const EventPropagation =() =>{
    
    const handleGrandParent = () =>{
        console.log("Grandparent Clicked");
    }
    
    const handleParentClick = () => {
        console.log("Parent Clicked");
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
        console.log(event);
        console.log("Child Clicked");
    };

    return(
        <section className="main_div">
            <div className="g_d" onClickCapture={() => handleGrandParent()}>
                <div className="p_div" onClickCapture={() => handleParentClick()}>
                    <button className="c_div" onClickCapture={(event) => handleChildClick(event)}>Child Div</button>
                </div>
            </div>

        </section>
    );
}